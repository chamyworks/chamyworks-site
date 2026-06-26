import { notFound, permanentRedirect } from "next/navigation";
import { chamyworksApps, getChamyworksApp } from "@/content/apps";

type AppPageProps = {
  params: Promise<{
    appSlug: string;
  }>;
};

export function generateStaticParams() {
  return chamyworksApps.map((app) => ({
    appSlug: app.slug,
  }));
}

export default async function AppPage({ params }: AppPageProps) {
  const { appSlug } = await params;
  const app = getChamyworksApp(appSlug);

  if (!app) {
    notFound();
  }

  permanentRedirect(`/apps/${app.slug}/privacy`);
}
