import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HappyPickPreview } from "@/components/happypick-preview";
import { SubpageHeader } from "@/components/subpage-header";
import { SiteFooter } from "@/components/site-footer";
import { chamyworksApps, getChamyworksApp } from "@/content/apps";

type AppPageProps = {
  params: Promise<{
    appSlug: string;
  }>;
};

export const dynamic = "force-dynamic";

const happyPick = {
  screenshots: [
    {
      src: "/apps/happypick/screenshot-1.png",
      alt: "오늘의 작은 행복을 담아보세요",
    },
    {
      src: "/apps/happypick/screenshot-2.png",
      alt: "짧은 한 줄이면 충분해요",
    },
    {
      src: "/apps/happypick/screenshot-3.png",
      alt: "나만의 저금통에 행복을 모아보세요",
    },
    {
      src: "/apps/happypick/screenshot-4.png",
      alt: "지나간 행복을 다시 돌아보세요",
    },
    {
      src: "/apps/happypick/screenshot-5.png",
      alt: "올해 모은 행복을 한눈에",
    },
  ],
  features: [
    { icon: "😊", title: "오늘의 행복 기록" },
    { icon: "🪙", title: "행복 저금통" },
    { icon: "📅", title: "월별 / 연도별 모아보기" },
    { icon: "💾", title: "데이터 백업 및 복원" },
  ],
};

export function generateStaticParams() {
  return chamyworksApps.map((app) => ({
    appSlug: app.slug,
  }));
}

export async function generateMetadata({
  params,
}: AppPageProps): Promise<Metadata> {
  const { appSlug } = await params;
  const app = getChamyworksApp(appSlug);

  if (!app) {
    return {
      title: "Apps | Chamyworks",
    };
  }

  if (app.slug !== "happypick") {
    return {
      title: `${app.name} | Chamyworks`,
    };
  }

  const title = "Happy Pick | Chamyworks";
  const description =
    "오늘의 작은 행복을 기록하고 차곡차곡 모아보세요. 해피픽은 작은 행복을 발견하고 모으는 행복 기록 앱입니다.";

  return {
    title,
    description,
    alternates: {
      canonical: `/apps/${app.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/apps/${app.slug}`,
      images: [
        {
          url: app.icon.src,
          width: app.icon.width,
          height: app.icon.height,
          alt: app.icon.alt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [app.icon.src],
    },
  };
}

export default async function AppPage({ params }: AppPageProps) {
  const { appSlug } = await params;
  const app = getChamyworksApp(appSlug);

  if (!app || app.slug !== "happypick") {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden px-5 pb-6 text-warm-ink sm:px-8 sm:pb-8 dark:text-[#f8efe4]">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <SubpageHeader showAppsMenu={false} />

        <Link
          href="/apps/"
          className="mt-4 w-fit text-xs font-semibold text-[#6b5448] transition hover:text-warm-ink sm:mt-5 sm:text-sm dark:text-[#d9cabb] dark:hover:text-[#f8efe4]"
        >
          ← Apps
        </Link>

        <section className="flex min-h-[8.25rem] flex-col items-center justify-center pb-[1.875rem] text-center sm:min-h-[11.5rem] sm:pb-10">
          <Image
            src={app.icon.src}
            alt={app.icon.alt}
            width={app.icon.width}
            height={app.icon.height}
            priority
            className="h-[3.25rem] w-[3.25rem] rounded-[0.9rem] shadow-[0_14px_30px_rgba(205,155,35,0.18)] sm:h-20 sm:w-20 sm:rounded-[1.3rem]"
            sizes="(min-width: 640px) 80px, 52px"
          />

          <h1 className="mt-3 text-[1.8rem] font-semibold leading-none tracking-normal sm:mt-4 sm:text-[2.625rem]">
            Happy Pick
          </h1>
          <p className="mt-2 text-[0.9rem] font-medium leading-6 text-warm-ink/90 sm:text-lg sm:leading-7 dark:text-[#f8efe4]/95">
            작은 행복 하나가 오늘을 행복하게 만들어 줍니다.
          </p>
        </section>

        <HappyPickPreview
          appStoreUrl={app.appStoreUrl}
          googlePlayUrl={app.googlePlayUrl}
          features={happyPick.features}
          slides={happyPick.screenshots}
        />

        <SiteFooter product={{ name: app.name, kind: "app", contactHref: `mailto:${app.policy.contact.email}`, privacyHref: `/apps/${app.slug}/privacy` }} />
      </div>
    </main>
  );
}
