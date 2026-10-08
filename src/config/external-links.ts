export const externalLinks={
  ezrah: process.env.NEXT_PUBLIC_EZRAH_URL,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  x: process.env.NEXT_PUBLIC_X_URL,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL
    ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`
    :undefined,
  privacyPolicy: process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL,
  termsOfUse: process.env.NEXT_PUBLIC_TERMS_URL,
  disclaimer: process.env.NEXT_PUBLIC_DISCLAIMER_URL,
};
