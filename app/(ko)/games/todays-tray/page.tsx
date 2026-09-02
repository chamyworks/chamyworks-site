import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SubpageHeader } from "@/components/subpage-header";
import { TodaysTrayPreview } from "@/components/todays-tray-preview";
import { todaysTray } from "@/content/todays-tray";

const canonicalPath = "/games/todays-tray";
const title = "오늘의 식판 | Today’s Tray | Chamyworks";

export const metadata: Metadata = {
  title,
  description: todaysTray.summary,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title,
    description: todaysTray.summary,
    type: "website",
    url: canonicalPath,
    images: [
      {
        url: todaysTray.icon.src,
        width: todaysTray.icon.width,
        height: todaysTray.icon.height,
        alt: todaysTray.icon.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: todaysTray.summary,
    images: [todaysTray.icon.src],
  },
};

export default function TodaysTrayPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 pb-6 text-warm-ink sm:px-8 sm:pb-8 dark:text-[#f8efe4]">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <SubpageHeader showAppsMenu={false} />

        <section className="py-8 sm:py-11 lg:py-12">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(20rem,0.8fr)_minmax(30rem,1.2fr)] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold text-[#8c6b4c] dark:text-[#e1c9ad]">
                Today’s Tray
              </p>
              <h1 className="mt-2 text-[2.45rem] font-semibold leading-tight tracking-normal sm:text-5xl">
                오늘의 식판
              </h1>
              <p className="mx-auto mt-4 max-w-[31rem] text-[0.98rem] leading-7 text-warm-muted sm:text-base sm:leading-8 lg:mx-0 dark:text-[#d9cabb]">
                주문 식판을 보고 차례로 나오는 음식을 알맞은 칸에 빠르게 담아
                최고 기록에 도전하는 캐주얼 배식 퍼즐 게임
              </p>
              <p className="mt-4 text-sm font-medium text-warm-muted/85 dark:text-[#cdbdac]">
                차미웍스 Chamyworks
              </p>
            </div>

            <Image
              src={todaysTray.icon.src}
              alt={todaysTray.icon.alt}
              width={todaysTray.icon.width}
              height={todaysTray.icon.height}
              priority
              className="h-auto w-full rounded-md shadow-[0_16px_40px_rgba(151,105,51,0.13)] dark:shadow-[0_18px_44px_rgba(0,0,0,0.24)]"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </div>
        </section>

        <TodaysTrayPreview />

        <footer className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-warm-muted/10 pb-5 pt-4 text-center text-xs text-warm-muted/85 sm:pb-6 dark:border-[#bda995]/14 dark:text-[#d9cabb]/85">
          <a
            href={`mailto:${todaysTray.policy.contact.email}`}
            className="font-medium underline decoration-warm-muted/25 underline-offset-4 transition hover:text-warm-ink hover:decoration-warm-ink dark:decoration-[#bda995]/35 dark:hover:text-[#f8efe4] dark:hover:decoration-[#f8efe4]"
          >
            {todaysTray.policy.contact.email}
          </a>
          <span aria-hidden="true">·</span>
          <Link
            href={`${canonicalPath}/privacy`}
            className="font-medium underline decoration-warm-muted/25 underline-offset-4 transition hover:text-warm-ink hover:decoration-warm-ink dark:decoration-[#bda995]/35 dark:hover:text-[#f8efe4] dark:hover:decoration-[#f8efe4]"
          >
            개인정보처리방침
          </Link>
        </footer>
      </div>
    </main>
  );
}
