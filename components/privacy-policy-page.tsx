import Link from "next/link";
import { SubpageHeader } from "@/components/subpage-header";
import type { ChamyworksApp, PrivacyPolicy } from "@/content/apps";

type PrivacyPolicyPageProps = {
  app: ChamyworksApp;
  language: "ko" | "en";
  policy: PrivacyPolicy;
};

function PolicyParagraph({
  email,
  text,
}: {
  email: string;
  text: string;
}) {
  const emailIndex = text.indexOf(email);

  if (emailIndex === -1) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {text.slice(0, emailIndex)}
      <a
        href={`mailto:${email}`}
        className="text-warm-ink underline decoration-warm-muted/30 underline-offset-4 transition hover:decoration-warm-ink dark:text-[#f8efe4] dark:decoration-[#bda995]/40 dark:hover:decoration-[#f8efe4]"
      >
        {email}
      </a>
      {text.slice(emailIndex + email.length)}
    </p>
  );
}

export function PrivacyPolicyPage({
  app,
  language,
  policy,
}: PrivacyPolicyPageProps) {
  const isEnglish = language === "en";
  const alternateHref = isEnglish
    ? `/apps/${app.slug}/privacy`
    : `/apps/${app.slug}/privacy/en`;
  const hasAlternatePolicy = Boolean(app.policyEn);

  return (
    <main className="min-h-screen px-5 pb-7 text-warm-ink sm:px-10 sm:pb-11 dark:text-[#f8efe4]">
      <div className="mx-auto max-w-6xl">
        <SubpageHeader active="apps" language={language} />
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
          <span>{isEnglish ? app.name : app.displayName}</span>
          <span>/</span>
          <span>{isEnglish ? "Privacy Policy" : "개인정보처리방침"}</span>
        </nav>

        <header className="mb-8 mt-7 border-b border-warm-muted/16 pb-7 sm:mb-10 sm:mt-0 sm:pb-8 dark:border-[#bda995]/18">
          <h1 className="text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
            <span className="block">{policy.title}</span>
            {!isEnglish && policy.titleEn ? (
              <span className="mt-2 block text-lg font-medium text-warm-muted sm:text-xl dark:text-[#cdbdac]">
                {policy.titleEn}
              </span>
            ) : null}
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-warm-muted sm:text-sm dark:text-[#cdbdac]">
            <p>
              {policy.updatedLabel ?? (isEnglish ? "Last updated" : "최종 수정일")}:{" "}
              {policy.updatedAt}
            </p>
            {hasAlternatePolicy ? (
              <Link
                href={alternateHref}
                hrefLang={isEnglish ? "ko" : "en"}
                className="font-medium text-warm-ink underline decoration-warm-muted/30 underline-offset-4 transition hover:decoration-warm-ink dark:text-[#f8efe4] dark:decoration-[#bda995]/40 dark:hover:decoration-[#f8efe4]"
              >
                {isEnglish ? "한국어" : "English"}
              </Link>
            ) : null}
          </div>
        </header>

        <div className="space-y-8 text-[0.95rem] leading-7 text-warm-muted sm:space-y-9 sm:text-base sm:leading-8 dark:text-[#d9cabb]">
          <section className="space-y-3">
            {policy.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          {policy.sections.map((section) => (
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

                    return (
                      <PolicyParagraph
                        key={`${section.title}-paragraph-${index}`}
                        email={policy.contact.email}
                        text={block.text}
                      />
                    );
                  })
                : section.paragraphs.map((paragraph, index) => (
                    <PolicyParagraph
                      key={`${section.title}-paragraph-${index}`}
                      email={policy.contact.email}
                      text={paragraph}
                    />
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

        {app.isPublic ? (
          <footer className="mt-10 border-t border-warm-muted/14 pt-5 text-xs text-warm-muted/80 dark:border-[#bda995]/16 dark:text-[#cdbdac]/85">
            <Link
              href={`/apps/${app.slug}`}
              className="font-medium underline decoration-warm-muted/25 underline-offset-4 transition hover:text-warm-ink hover:decoration-warm-ink dark:decoration-[#bda995]/35 dark:hover:text-[#f8efe4]"
            >
              {isEnglish
                ? `Back to ${app.name}`
                : `${app.name} 소개로 돌아가기`}
            </Link>
          </footer>
        ) : null}
      </article>
    </main>
  );
}
