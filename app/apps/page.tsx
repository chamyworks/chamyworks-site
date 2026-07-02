import type { Metadata } from "next";
import Link from "next/link";
import { AppCard } from "@/components/app-card";
import { chamyworksApps } from "@/content/apps";

export const metadata: Metadata = {
  title: "Apps | Chamyworks",
  description: "Chamyworks에서 만든 앱을 소개합니다.",
  alternates: {
    canonical: "/apps",
  },
  openGraph: {
    title: "Apps | Chamyworks",
    description: "Chamyworks에서 만든 앱을 소개합니다.",
    type: "website",
    url: "/apps",
  },
};

export default function AppsPage() {
  return (
    <main className="min-h-screen px-6 py-10 text-warm-ink sm:px-10 sm:py-14 dark:text-[#f8efe4]">
      <div className="mx-auto w-full max-w-4xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-12 flex flex-wrap items-center gap-2 text-xs text-warm-muted/75 dark:text-[#bda995]/80"
        >
          <Link
            href="/"
            className="transition hover:text-warm-ink dark:hover:text-[#f8efe4]"
          >
            Chamyworks
          </Link>
          <span>/</span>
          <span>Apps</span>
        </nav>

        <header className="mb-9 text-center sm:mb-12">
          <h1 className="text-3xl font-semibold tracking-normal sm:text-5xl">
            Apps
          </h1>
          <p className="mx-auto mt-5 max-w-[26rem] text-[0.98rem] leading-8 text-warm-muted sm:text-base dark:text-[#d9cabb]">
            차미웍스가 만든 작은 앱들을 모아두었습니다.
          </p>
        </header>

        <section aria-label="앱 목록" className="grid gap-4 sm:grid-cols-2">
          {chamyworksApps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </section>
      </div>
    </main>
  );
}
