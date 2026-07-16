import Link from "next/link";
import { AppCard } from "@/components/app-card";
import { chamyworksApps } from "@/content/apps";

export function AppsSection() {
  return (
    <section className="w-full text-left" aria-labelledby="home-apps-title">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2
          id="home-apps-title"
          className="text-lg font-semibold tracking-normal text-warm-ink dark:text-[#f8efe4]"
        >
          Apps
        </h2>
        <Link
          href="/apps/"
          className="text-xs font-medium text-warm-muted underline decoration-warm-muted/25 underline-offset-4 transition hover:text-warm-ink hover:decoration-warm-ink dark:text-[#cdbdac] dark:hover:text-[#f8efe4]"
        >
          모두 보기
        </Link>
      </div>

      <div className="grid gap-4">
        {chamyworksApps.map((app) => (
          <AppCard key={app.slug} app={app} variant="home" />
        ))}
      </div>
    </section>
  );
}
