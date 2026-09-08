// Separate approvals: publishing the policy never enables collection.
export const WEBSITE_PRIVACY_APPROVED = true;
export const ANALYTICS_ACTIVATION_APPROVED = true;

export function websitePrivacyMode(value = process.env.NEXT_PUBLIC_WEBSITE_PRIVACY_MODE, approved = WEBSITE_PRIVACY_APPROVED) {
  if (value === "preview" && process.env.NODE_ENV !== "production") return "preview";
  return value === "published" && approved ? "published" : "hidden";
}

export const COPYRIGHT_YEAR = 2026;
