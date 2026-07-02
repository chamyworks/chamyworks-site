import Image from "next/image";
import Link from "next/link";
import type { ChamyworksApp } from "@/content/apps";

type AppCardProps = {
  app: ChamyworksApp;
  className?: string;
};

export function AppCard({ app, className = "" }: AppCardProps) {
  return (
    <article
      className={`rounded-lg border border-warm-muted/14 bg-white/48 p-5 text-left shadow-[0_14px_36px_rgba(92,70,52,0.08)] dark:border-[#bda995]/16 dark:bg-[#261d17]/58 ${className}`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={app.icon.src}
          alt={app.icon.alt}
          width={app.icon.width}
          height={app.icon.height}
          className="h-16 w-16 shrink-0 rounded-[1.05rem] shadow-[0_10px_24px_rgba(205,155,35,0.18)]"
          sizes="64px"
        />
        <div className="min-w-0">
          <h3 className="text-xl font-semibold leading-tight tracking-normal text-warm-ink dark:text-[#f8efe4]">
            {app.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-warm-muted dark:text-[#d9cabb]">
            {app.summary}
          </p>
        </div>
      </div>

      <Link
        href={`/apps/${app.slug}/`}
        className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-warm-muted/20 bg-white/45 px-5 text-sm font-medium text-warm-ink transition hover:border-warm-muted/34 hover:bg-white/68 dark:border-[#bda995]/20 dark:bg-[#2a211a]/62 dark:text-[#f8efe4] dark:hover:bg-[#33271f]"
      >
        자세히 보기
      </Link>
    </article>
  );
}
