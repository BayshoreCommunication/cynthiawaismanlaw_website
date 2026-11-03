// URL parity audit: requests every old WordPress URL against the new site
// and writes url-parity-report.csv.
//
// Usage: node seo-audit/parity-audit.mjs [baseUrl] [oldUrlsFile]
//   baseUrl     default http://localhost:3000
//   oldUrlsFile default seo-audit/old-urls-reconstructed.tsv (first column = path)

import { readFileSync, writeFileSync } from "node:fs";

const base = (process.argv[2] || "http://localhost:3000").replace(/\/+$/, "");
const listFile = process.argv[3] || "seo-audit/old-urls-reconstructed.tsv";

const oldPaths = readFileSync(listFile, "utf8")
  .split("\n")
  .map((l) => l.split("\t")[0].trim())
  .filter((p) => p.startsWith("/"));

const blogSlugs = new Set(
  JSON.parse(readFileSync("data/blog/posts.json", "utf8")).map((p) => p.slug)
);

const strip = (p) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

// Follow redirects by hand so every hop is recorded.
async function resolve(path) {
  let url = base + path;
  const hops = [];
  for (let i = 0; i < 10; i++) {
    const res = await fetch(url, { redirect: "manual" });
    const loc = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && loc) {
      hops.push(res.status);
      url = new URL(loc, url).href;
      continue;
    }
    const u = new URL(url);
    return { status: res.status, finalPath: u.pathname + u.search, hops };
  }
  return { status: "LOOP", finalPath: "", hops };
}

function classify(oldPath, r) {
  const finalNoQuery = r.finalPath.split("?")[0];
  const post = oldPath.match(/^\/blog\/\d{4}\/\d{2}\/([^/]+)\/$/);

  if (r.status !== 200) {
    return ["MISSING_IN_NEW", "", `returns ${r.status}`];
  }
  if (r.hops.length === 0 && finalNoQuery === oldPath) {
    return ["MATCH", r.finalPath, ""];
  }
  if (strip(finalNoQuery) === strip(oldPath) && !r.finalPath.includes("?")) {
    return ["MATCH", r.finalPath, `trailing slash removed (${r.hops.join(">")})`];
  }
  // Old blog post → only counts if it lands on that same post.
  if (post) {
    return finalNoQuery === `/blog/${post[1]}` && blogSlugs.has(post[1])
      ? ["DIFFERENT_PATH", r.finalPath, `post moved; redirect ${r.hops.join(">")}`]
      : ["MISSING_IN_NEW", "", `redirects to unrelated ${r.finalPath}`];
  }
  // Category archive → filtered blog listing is an equivalent page at a new path.
  if (/^\/blog\/category\//.test(oldPath) && r.finalPath.startsWith("/blog?category=")) {
    return ["DIFFERENT_PATH", r.finalPath, `category now a query string; redirect ${r.hops.join(">")}`];
  }
  // Any other redirect to the generic /blog listing is not the same content.
  if (finalNoQuery === "/blog" && strip(oldPath) !== "/blog") {
    return ["MISSING_IN_NEW", "", `no equivalent page; redirects to generic /blog`];
  }
  return ["DIFFERENT_PATH", r.finalPath, `redirect ${r.hops.join(">")}`];
}

const csv = (v) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
const rows = [["old_url", "new_url_equivalent", "status", "note"]];
const counts = {};

const queue = [...oldPaths];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const p = queue.shift();
      const r = await resolve(p);
      const [status, newUrl, note] = classify(p, r);
      counts[status] = (counts[status] || 0) + 1;
      rows.push([p, newUrl, status, note]);
    }
  })
);

const order = { MISSING_IN_NEW: 0, DIFFERENT_PATH: 1, MATCH: 2 };
rows.splice(1, rows.length, ...rows.slice(1).sort((a, b) => order[a[2]] - order[b[2]] || a[0].localeCompare(b[0])));
writeFileSync("seo-audit/url-parity-report.csv", rows.map((r) => r.map(csv).join(",")).join("\n") + "\n");

console.log(`checked ${oldPaths.length} old URLs against ${base}`);
console.log(counts);
