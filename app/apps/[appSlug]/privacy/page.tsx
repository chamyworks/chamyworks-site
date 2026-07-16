import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SubpageHeader } from "@/components/subpage-header";
import { chamyworksApps, getChamyworksApp } from "@/content/apps";

type PrivacyPageProps = {
  params: Promise<{
    appSlug: string;
  }>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return chamyworksApps.map((app) => ({
    appSlug: app.slug,
  }));
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { appSlug } = await params;
  const app = getChamyworksApp(appSlug);

  if (!app) {
    return {
      title: "개인정보처리방침 | Chamyworks",
    };
  }

  const policyTitle = app.policy.titleEn
    ? `${app.policy.title} | ${app.policy.titleEn}`
    : app.policy.title;
  const title = `${policyTitle} | Chamyworks`;

  return {
    title,
    description: app.policy.description,
    alternates: {
      canonical: `/apps/${app.slug}/privacy`,
    },
    openGraph: {
      title,
      description: app.policy.description,
      type: "article",
      url: `/apps/${app.slug}/privacy`,
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { appSlug } = await params;
  const app = getChamyworksApp(appSlug);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen px-5 pb-7 text-warm-ink sm:px-10 sm:pb-11 dark:text-[#f8efe4]">
      <div className="mx-auto max-w-6xl">
        <SubpageHeader active="apps" />
      </div>

      <article className="mx-auto max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 mt-5 hidden flex-wrap items-center gap-2 text-xs text-warm-muted/80 sm:flex dark:text-[#bda995]/80"
        >
          <Link href="/" className="transition hover:text-warm-ink dark:hover:text-[#f8efe4]">
            Chamyworks
          </Link>
          <span>/</span>
          <Link
            href="/apps/"
            className="transition hover:text-warm-ink dark:hover:text-[#f8efe4]"
          >
            Apps
          </Link>
          <span>/</span>
          <span>{app.displayName}</span>
          <span>/</span>
          <span>개인정보처리방침</span>
        </nav>

        <header className="mb-8 mt-7 border-b border-warm-muted/16 pb-7 sm:mt-0 sm:mb-10 sm:pb-8 dark:border-[#bda995]/18">
          <h1 className="text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
            <span className="block">{app.policy.title}</span>
            {app.policy.titleEn ? (
              <span className="mt-2 block text-lg font-medium text-warm-muted sm:text-xl dark:text-[#cdbdac]">
                {app.policy.titleEn}
              </span>
            ) : null}
          </h1>
          <p className="mt-4 text-xs text-warm-muted sm:text-sm dark:text-[#cdbdac]">
            {app.policy.updatedLabel ?? "최종 수정일"}: {app.policy.updatedAt}
          </p>
        </header>

        <div className="space-y-8 text-[0.95rem] leading-7 text-warm-muted sm:space-y-9 sm:text-base sm:leading-8 dark:text-[#d9cabb]">
          <section className="space-y-3">
            {app.policy.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          {app.policy.sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-lg font-semibold text-warm-ink sm:text-xl dark:text-[#f8efe4]">
                {section.title}
              </h2>
              {section.blocks
                ? section.blocks.map((block, index) => {
                    if (block.type === "list") {
                      return (
                        <ul
                          key={`${section.title}-list-${index}`}
                          className="list-disc space-y-1.5 pl-5"
                        >
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    return <p key={block.text}>{block.text}</p>;
                  })
                : section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>
                      {paragraph === `문의: ${app.policy.contact.email}` ? (
                        <>
                          문의: {" "}
                          <a
                            href={`mailto:${app.policy.contact.email}`}
                            className="text-warm-ink underline decoration-warm-muted/30 underline-offset-4 transition hover:decoration-warm-ink dark:text-[#f8efe4] dark:decoration-[#bda995]/40 dark:hover:decoration-[#f8efe4]"
                          >
                            {app.policy.contact.email}
                          </a>
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
              {!section.blocks && section.listItems ? (
                <ul className="list-disc space-y-1.5 pl-5">
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <footer className="mt-10 border-t border-warm-muted/14 pt-5 text-xs text-warm-muted/80 dark:border-[#bda995]/16 dark:text-[#cdbdac]/85">
          <Link
            href={`/apps/${app.slug}`}
            className="font-medium underline decoration-warm-muted/25 underline-offset-4 transition hover:text-warm-ink hover:decoration-warm-ink dark:decoration-[#bda995]/35 dark:hover:text-[#f8efe4]"
          >
            {app.name} 소개로 돌아가기
          </Link>
        </footer>
      </article>
    </main>
  );
}
