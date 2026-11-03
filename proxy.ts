import { NextResponse, type NextRequest } from "next/server";
import { blogPageCount, parseBlogListParams } from "@/lib/blogUrls";

/**
 * /blog listing URLs, handled before rendering so crawlers get real
 * status codes (the page itself streams, so it can't change the status):
 * - 301 to the clean URL: ?page=1 → /blog, ?page=abc → /blog,
 *   ?category=Estate%20Planning → ?category=estate-planning
 * - 404 for a page past the last one, e.g. /blog?page=46
 */
export function proxy(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const params = parseBlogListParams((key) => searchParams.get(key));

  if (!params.isClean) {
    const url = request.nextUrl.clone();
    for (const [key, value] of Object.entries(params.clean)) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    return NextResponse.redirect(url, 301);
  }

  // Search results can't be counted here; the page handles those.
  if (!params.q && params.page > blogPageCount(params.category?.slug)) {
    // No route matches this path, so Next.js renders the 404 page with a 404 status.
    return NextResponse.rewrite(new URL("/_blog-page-not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/blog",
};
