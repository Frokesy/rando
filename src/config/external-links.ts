export const externalLinks = {
  ezrah: process.env.NEXT_PUBLIC_EZRAH_URL || "https://ezrah.co",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/arkcap/",
  x: process.env.NEXT_PUBLIC_X_URL,
  email: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@arkholdingcap.com"}`,
  privacyPolicy: process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL,
  termsOfUse: process.env.NEXT_PUBLIC_TERMS_URL,
  disclaimer: process.env.NEXT_PUBLIC_DISCLAIMER_URL,
};
