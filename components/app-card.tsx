import Image from "next/image";
import Link from "next/link";
import type { ChamyworksApp } from "@/content/apps";

type AppCardProps = {
  app: ChamyworksApp;
  className?: string;
  variant?: "home" | "list";
};

export function AppCard({
  app,
  className = "",
  variant = "list",
}: AppCardProps) {
  return (
    <Link
      href={`/apps/${app.slug}/`}
      className={`group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b5448]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf7f1] ${className}`}
    >
      <article className="flex items-center gap-3.5 rounded-lg border border-[#e8ded5] bg-[#fffaf5] p-3.5 text-left transition-colors group-hover:border-[#d9c9bd] group-hover:bg-[#fffdf9] sm:gap-4 sm:p-4 dark:border-[#4c3c33] dark:bg-[#241c17] dark:group-hover:border-[#6f5a4d] dark:group-hover:bg-[#2a211b]">
        <Image
          src={app.icon.src}
          alt={app.icon.alt}
          width={app.icon.width}
          height={app.icon.height}
          className="h-[3.25rem] w-[3.25rem] shrink-0 rounded-[0.9rem] shadow-[0_8px_18px_rgba(205,155,35,0.14)] sm:h-14 sm:w-14 sm:rounded-[0.95rem]"
          sizes="(min-width: 640px) 56px, 52px"
        />
        <div
          className={`flex min-w-0 flex-1 flex-col ${
            variant === "list" ? "sm:flex-row sm:items-center sm:gap-5" : ""
          }`}
        >
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold leading-tight tracking-normal text-warm-ink dark:text-[#f8efe4]">
              {app.name}
            </h3>
            <p className="mt-1 text-[0.82rem] leading-5 text-warm-muted sm:text-sm dark:text-[#d9cabb]">
              {app.summary}
            </p>
          </div>

          <span
            className={`mt-2 inline-flex shrink-0 items-center text-xs font-semibold text-[#6b5448] transition group-hover:text-warm-ink sm:text-[0.8rem] dark:text-[#d9cabb] dark:group-hover:text-[#f8efe4] ${
              variant === "list" ? "sm:ml-auto sm:mt-0" : ""
            }`}
          >
            자세히 보기 →
          </span>
        </div>
      </article>
    </Link>
  );
}
