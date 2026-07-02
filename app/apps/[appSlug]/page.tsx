import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HappyPickPreview } from "@/components/happypick-preview";
import { chamyworksApps, getChamyworksApp } from "@/content/apps";

type AppPageProps = {
  params: Promise<{
    appSlug: string;
  }>;
};

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
    <main className="min-h-screen overflow-hidden px-5 py-6 text-warm-ink sm:px-8 sm:py-10 dark:text-[#f8efe4]">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex flex-wrap items-center gap-2 text-xs text-warm-muted/75 sm:mb-8 dark:text-[#bda995]/80"
        >
          <Link
            href="/"
            className="transition hover:text-warm-ink dark:hover:text-[#f8efe4]"
          >
            Chamyworks
          </Link>
          <span>/</span>
          <span>Apps</span>
          <span>/</span>
          <span>Happy Pick</span>
        </nav>

        <section className="flex min-h-[13.5rem] flex-col items-center justify-center pb-5 pt-1 text-center sm:min-h-[18rem] sm:pb-7 lg:min-h-[19rem]">
          <Image
            src={app.icon.src}
            alt={app.icon.alt}
            width={app.icon.width}
            height={app.icon.height}
            priority
            className="h-16 w-16 rounded-[1.1rem] shadow-[0_16px_36px_rgba(205,155,35,0.2)] sm:h-24 sm:w-24 sm:rounded-[1.55rem]"
            sizes="(min-width: 640px) 96px, 64px"
          />

          <h1 className="mt-3 text-[2rem] font-semibold leading-none tracking-normal sm:mt-5 sm:text-5xl">
            Happy Pick
          </h1>
          <p className="mt-3 text-[0.94rem] font-medium leading-6 text-warm-ink/90 sm:text-xl sm:leading-8 dark:text-[#f8efe4]/95">
            작은 행복 하나가 오늘을 행복하게 만들어 줍니다.
          </p>
        </section>

        <HappyPickPreview
          appStoreUrl={app.appStoreUrl}
          features={happyPick.features}
          slides={happyPick.screenshots}
        />

        <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-2 border-t border-warm-muted/12 pb-6 pt-5 text-center sm:pb-7 dark:border-[#bda995]/16">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm">
            <span className="font-semibold text-warm-ink dark:text-[#f8efe4]">
              ✉ Contact :
            </span>
            <a
              href={`mailto:${app.policy.contact.email}`}
              className="font-medium text-warm-muted underline decoration-warm-muted/30 underline-offset-4 transition hover:text-warm-ink hover:decoration-warm-ink dark:text-[#d9cabb] dark:decoration-[#bda995]/40 dark:hover:text-[#f8efe4] dark:hover:decoration-[#f8efe4]"
            >
              {app.policy.contact.email}
            </a>
          </div>
          <Link
            href={`/apps/${app.slug}/privacy`}
            className="text-xs font-medium text-warm-muted/85 underline decoration-warm-muted/25 underline-offset-4 transition hover:text-warm-ink hover:decoration-warm-ink dark:text-[#d9cabb]/85 dark:decoration-[#bda995]/35 dark:hover:text-[#f8efe4] dark:hover:decoration-[#f8efe4]"
          >
            개인정보처리방침
          </Link>
        </section>
      </div>
    </main>
  );
}
