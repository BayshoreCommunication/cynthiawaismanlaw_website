export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  content?: string[];
}

export const blogCategories = [
  "All",
  "Immigration",
  "Estate Planning",
  "Powers Of Attorney",
  "Trusts",
  "Citizenship",
  "Family Based Visas",
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Choosing a health care surrogate when estate planning",
    slug: "choosing-a-health-care-surrogate-when-estate-planning",
    author: "Cynthia I. Waisman",
    date: "Sep 23, 2026",
    category: "Powers Of Attorney",
    excerpt:
      "Estate planning includes preparing for incapacitation. Anything might happen to you, making you unable to manage your affairs or make decisions for yourself. And one of those decisions is medical. An estate plan allows you to plan for such a possibility.",
    content: [
      "Estate planning includes preparing for incapacitation. Anything might happen to you, making you unable to manage your affairs or make decisions for yourself. And one of those decisions is medical. An estate plan allows you to plan for such a possibility.",
      "Using a Florida Designation of Health Care Surrogate, you can appoint a person you trust to make healthcare decisions on your behalf if you become unable to do so yourself. This trusted individual will communicate with medical doctors, consent to or refuse specific procedures, and ensure your healthcare preferences are carried out.",
      "When choosing a surrogate, it is essential to pick someone who shares your values, remains calm under emotional pressure, and is willing to advocate vigorously on your behalf.",
    ],
  },
  {
    id: 2,
    title: "Visa processing temporarily suspended",
    slug: "visa-processing-temporarily-suspended",
    author: "Cynthia I. Waisman",
    date: "Sep 23, 2026",
    category: "Immigration",
    excerpt:
      "On Tuesday, August 25, the United States temporarily suspended its visa processing program. The reason given by the Department of State is that embassy and consular staff needed training regarding some of the new rules that will apply to both visas and green cards.",
    content: [
      "On Tuesday, August 25, the United States temporarily suspended its visa processing program. The reason given by the Department of State is that embassy and consular staff needed training regarding some of the new rules that will apply to both visas and green cards.",
      "Applicants waiting for consular appointments abroad should review their documentation with an experienced immigration attorney to ensure compliance with updated USCIS directives.",
      "Our firm continues to monitor consular scheduling alerts to help clients avoid avoidable processing delays or denials.",
    ],
  },
  {
    id: 3,
    title: "What type of trust should you consider for your estate plan?",
    slug: "what-type-of-trust-should-you-consider-for-your-estate-plan",
    author: "Cynthia I. Waisman",
    date: "Sep 4, 2026",
    category: "Trusts",
    excerpt:
      "A will is an essential estate planning document, but it may not accomplish everything you want. Assets distributed through a will generally must pass through probate, and a will may not provide enough control if you have minor children or a financially vulnerable beneficiary.",
    content: [
      "A will is an essential estate planning document, but it may not accomplish everything you want. Assets distributed through a will generally must pass through probate, and a will may not provide enough control if you have minor children, a financially vulnerable beneficiary, or unique privacy needs.",
      "A Revocable Living Trust allows you to bypass the public and costly probate process, maintain complete control during your lifetime, and seamlessly transfer assets to loved ones through your designated successor trustee.",
      "For individuals with asset protection goals or disabled loved ones, Irrevocable Trusts and Special Needs Trusts provide added safeguards while preserving eligibility for public assistance.",
    ],
  },
  {
    id: 4,
    title: "Do you need witnesses when establishing a power of attorney?",
    slug: "do-you-need-witnesses-when-establishing-a-power-of-attorney",
    author: "Cynthia I. Waisman",
    date: "Sep 2, 2026",
    category: "Powers Of Attorney",
    excerpt:
      "Under Florida law, the person establishing a power of attorney (the principal) needs to sign the document, and there must be two witnesses to this signature. Additionally, the document needs to be notarized by a notary public.",
    content: [
      "Under Florida law, the person establishing a power of attorney (the principal) needs to sign the document, and there must be two witnesses to this signature. Additionally, the document needs to be notarized by a notary public. Only when these official steps have been completed does the document take legal effect.",
      "Florida statutes require strict adherence to execution formalities. Missing or improper witness signatures can result in financial institutions rejecting the document when it is needed most.",
    ],
  },
  {
    id: 5,
    title: "USCIS policy change on incomplete immigration benefit applications",
    slug: "uscis-policy-change-on-incomplete-immigration-benefit-applications",
    author: "Cynthia I. Waisman",
    date: "Sep 1, 2026",
    category: "Immigration",
    excerpt:
      "A recent policy change has raised the stakes for immigrants filing applications for benefits with U.S. Citizenship and Immigration Services. Effective Aug. 5, 2026, USCIS officers may now broadly deny an application without first offering the individual the chance to cure defects.",
    content: [
      "A recent policy change has raised the stakes for immigrants filing applications for benefits with U.S. Citizenship and Immigration Services. Effective Aug. 5, 2026, USCIS officers may now broadly deny an application without first offering the individual the chance to respond to a Request for Evidence (RFE) or Notice of Intent to Deny (NOID).",
      "Because initial filings must be complete and supported by all required initial evidence, working with an experienced immigration lawyer is more critical than ever to avoid automatic rejections and forfeiture of filing fees.",
    ],
  },
  {
    id: 6,
    title: "Which life changes may require estate plan changes?",
    slug: "which-life-changes-may-require-estate-plan-changes",
    author: "Cynthia I. Waisman",
    date: "Aug 21, 2026",
    category: "Estate Planning",
    excerpt:
      "Life rarely stays stagnant for long. As families grow, careers evolve and financial goals shift, the plans people made years ago may no longer completely reflect their current wishes. Many people create an estate plan and assume the work is finished.",
    content: [
      "Life rarely stays stagnant for long. As families grow, careers evolve and financial goals shift, the plans people made years ago may no longer completely reflect their current wishes. Many people create an estate plan and assume the work is finished.",
      "Key events that necessitate updating your Florida estate plan include marriage or divorce, birth or adoption of children or grandchildren, acquisition of new real estate or business interests, moving to or from Florida, and changes in tax law.",
    ],
  },
  {
    id: 7,
    title: "What to know when naming a guardian for your child",
    slug: "what-to-know-when-naming-a-guardian-for-your-child",
    author: "Cynthia I. Waisman",
    date: "Aug 6, 2026",
    category: "Estate Planning",
    excerpt:
      "If you have a minor child, it’s crucial to name a guardian for them. This is someone who will raise them to adulthood if you become unable to do so. In Florida, if the parents of a minor child become incapacitated or die without a named guardian, a judge appoints one.",
    content: [
      "If you have a minor child, it’s crucial to name a guardian for them. This is someone who will raise them to adulthood if you become unable to do so. In Florida, if the parents of a minor child become incapacitated or die without a named guardian, a judge appoints one.",
      "By formally nominating a guardian in your Last Will and Testament, you ensure that someone who shares your parenting philosophy and moral values raises your children rather than leaving the decision to judicial discretion.",
    ],
  },
  {
    id: 8,
    title: "Who can serve as a personal representative in Florida?",
    slug: "who-can-serve-as-a-personal-representative-in-florida",
    author: "Cynthia I. Waisman",
    date: "Jul 23, 2026",
    category: "Estate Planning",
    excerpt:
      "A personal representative administers a decedent’s probate estate. Some of their duties include securing, valuing and managing the estate’s assets, communicating with beneficiaries and interested parties, paying debts and taxes, and distributing assets.",
    content: [
      "A personal representative administers a decedent’s probate estate. Some of their duties include securing, valuing and managing the estate’s assets, communicating with beneficiaries and interested parties, paying debts and taxes, and distributing assets to beneficiaries.",
      "Florida law imposes strict qualifications: an individual must be 18 years or older, mentally competent, not convicted of a felony, and either a Florida resident or related to the decedent by blood, marriage, or adoption.",
    ],
  },
  {
    id: 9,
    title: "Should my fiancée come to the USA to get a green card?",
    slug: "should-my-fiancee-come-to-the-usa-to-get-a-green-card",
    author: "Cynthia I. Waisman",
    date: "Jul 23, 2026",
    category: "Family Based Visas",
    excerpt:
      "It seems like the sensible choice, i.e., bringing your fiancée here to the United States to let her apply for a green card and make her your wife. But like many areas of the immigration process, recent policy changes affect the choices being made at all levels.",
    content: [
      "It seems like the sensible choice, i.e., bringing your fiancée here to the United States to let her apply for a green card and make her your wife. But like many areas of the immigration process, recent policy changes affect the choices being made at all levels.",
      "Entering on a tourist visa with preconceived intent to marry and adjust status can trigger visa fraud allegations. A K-1 Fiancé Visa or marrying abroad and consular processing ensures strict adherence to federal immigration statutes.",
    ],
  },
  {
    id: 10,
    title: "The test requirements for naturalization",
    slug: "the-test-requirements-for-naturalization",
    author: "Cynthia I. Waisman",
    date: "Jul 9, 2026",
    category: "Citizenship",
    excerpt:
      "Naturalization is the process that allows a foreign national living in the United States to become a citizen. Lawful permanent residents who have resided in the country for years can apply for naturalization, provided that they pass a background check and civics test.",
    content: [
      "Naturalization is the process that allows a foreign national living in the United States to become a citizen. Lawful permanent residents who have resided in the country for years can apply for naturalization, provided that they pass a background check and meet all statutory criteria.",
      "During the naturalization interview, applicants must demonstrate basic English reading, writing, and speaking ability, as well as knowledge of U.S. history and government civics. Age and medical disability waivers (Form N-648) may be available for qualifying individuals.",
    ],
  },
];

