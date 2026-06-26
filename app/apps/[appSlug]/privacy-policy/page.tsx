import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { chamyworksApps, getChamyworksApp } from "@/content/apps";

type PrivacyPolicyPageProps = {
  params: Promise<{
    appSlug: string;
  }>;
};

export function generateStaticParams() {
  return chamyworksApps.map((app) => ({
    appSlug: app.slug,
  }));
}

export async function generateMetadata({
  params,
}: PrivacyPolicyPageProps): Promise<Metadata> {
  const { appSlug } = await params;
  const app = getChamyworksApp(appSlug);

  if (!app) {
    return {
      title: "개인정보처리방침 | Chamyworks",
    };
  }

  return {
    title: `${app.policy.title} | Chamyworks`,
    description: app.policy.description,
    openGraph: {
      title: `${app.policy.title} | Chamyworks`,
      description: app.policy.description,
      type: "article",
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const { appSlug } = await params;
  const app = getChamyworksApp(appSlug);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-10 text-warm-ink sm:px-10 sm:py-14 dark:text-[#f8efe4]">
      <article className="mx-auto max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-12 flex flex-wrap items-center gap-2 text-xs text-warm-muted/80 dark:text-[#bda995]/80"
        >
          <Link href="/" className="transition hover:text-warm-ink dark:hover:text-[#f8efe4]">
            Chamyworks
          </Link>
          <span>/</span>
          <span>Apps</span>
          <span>/</span>
          <span>{app.name}</span>
          <span>/</span>
          <span>개인정보처리방침</span>
        </nav>

        <header className="mb-12 border-b border-warm-muted/20 pb-10 dark:border-[#bda995]/20">
          <p className="mb-3 text-sm text-warm-muted dark:text-[#cdbdac]">
            Apps / {app.name}
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
            {app.policy.title}
          </h1>
          <p className="mt-5 text-sm text-warm-muted dark:text-[#cdbdac]">
            최종 업데이트: {app.policy.updatedAt}
          </p>
        </header>

        <div className="space-y-10 text-[0.98rem] leading-8 text-warm-muted sm:text-base sm:leading-8 dark:text-[#d9cabb]">
          <section className="space-y-4">
            {app.policy.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          {app.policy.sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-xl font-semibold text-warm-ink dark:text-[#f8efe4]">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="space-y-2 pt-2">
            <p className="font-semibold text-warm-ink dark:text-[#f8efe4]">
              {app.policy.contact.name}
            </p>
            <a
              href={`mailto:${app.policy.contact.email}`}
              className="inline-flex text-warm-ink underline decoration-warm-muted/35 underline-offset-4 transition hover:decoration-warm-ink dark:text-[#f8efe4] dark:decoration-[#bda995]/45 dark:hover:decoration-[#f8efe4]"
            >
              {app.policy.contact.email}
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}
