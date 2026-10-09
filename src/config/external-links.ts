export const externalLinks = {
  ezrah: process.env.NEXT_PUBLIC_EZRAH_URL || "https://ezrah.co",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/arkcap/",
  x: process.env.NEXT_PUBLIC_X_URL || "https://x.com/arkcapitalng?s=11",
  submitVenture: "https://docs.google.com/forms/d/e/1FAIpQLSfC2t8k2KGoDXtPBENv-Vc4sBlfAfh7qIO_PzOz8ZKTL7eiww/viewform",
  partnerWithUs: "https://docs.google.com/forms/d/e/1FAIpQLSc0-gULXG0vjDD7DxYvmVk_0QKpCX_2J8mPE-CO8luCghEMvw/viewform",
  email: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@arkholdingcap.com"}`,
  privacyPolicy: process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL,
  termsOfUse: process.env.NEXT_PUBLIC_TERMS_URL,
  disclaimer: process.env.NEXT_PUBLIC_DISCLAIMER_URL,
};
