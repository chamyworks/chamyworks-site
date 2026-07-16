import type { Metadata } from "next";
import { AppCard } from "@/components/app-card";
import { SiteFooter } from "@/components/site-footer";
import { SubpageHeader } from "@/components/subpage-header";
import { chamyworksApps } from "@/content/apps";

export const metadata: Metadata = {
  title: "Apps | Chamyworks",
  description: "일상에 작은 즐거움을 더하는 차미웍스의 앱을 소개합니다.",
  alternates: {
    canonical: "/apps",
  },
  openGraph: {
    title: "Apps | Chamyworks",
    description: "일상에 작은 즐거움을 더하는 차미웍스의 앱을 소개합니다.",
    type: "website",
    url: "/apps",
  },
};

export default function AppsPage() {
  const hasMultipleApps = chamyworksApps.length > 1;

  return (
    <main className="px-5 pb-10 text-warm-ink sm:px-10 sm:pb-14 dark:text-[#f8efe4]">
      <div className="mx-auto w-full max-w-6xl">
        <SubpageHeader showAppsMenu={false} />

        <div className="mx-auto w-full max-w-4xl">
          <header className="mb-5 py-8 text-center sm:mb-7 sm:py-9">
            <h1 className="text-[2.5rem] font-semibold leading-none tracking-normal sm:text-[3.5rem]">
              Apps
            </h1>
            <p className="mx-auto mt-4 max-w-[31rem] text-[0.94rem] leading-7 text-warm-muted sm:text-base dark:text-[#d9cabb]">
              일상에 작은 즐거움을 더하는 차미웍스의 앱을 소개합니다.
            </p>
          </header>

          <section
            aria-label="앱 목록"
            className={`grid gap-4 ${hasMultipleApps ? "lg:grid-cols-2" : "grid-cols-1"}`}
          >
            {chamyworksApps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </section>

          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
