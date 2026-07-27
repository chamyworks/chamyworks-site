import { notFound, permanentRedirect } from "next/navigation";
import { getChamyworksApp } from "@/content/apps";

type LegacyPrivacyPolicyPageProps = {
  params: Promise<{
    appSlug: string;
  }>;
};

const legacySlugs: Record<string, string> = {
  "happy-pick": "happypick",
};

export default async function LegacyPrivacyPolicyPage({
  params,
}: LegacyPrivacyPolicyPageProps) {
  const { appSlug } = await params;
  const app = getChamyworksApp(legacySlugs[appSlug] ?? appSlug);

  if (!app) {
    notFound();
  }

  permanentRedirect(`/apps/${app.slug}/privacy`);
}
