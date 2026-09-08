import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SubpageHeader } from "@/components/subpage-header";
import { websitePrivacy } from "@/content/website-privacy";
import { websitePrivacyMode } from "@/lib/site-release";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "웹사이트 개인정보처리방침 | Chamyworks",
  description: "차미웍스 웹사이트의 방문 통계, 이메일 문의 및 개인정보 처리 안내입니다.",
  alternates: { canonical: "/privacy" },
  robots: websitePrivacyMode() === "published" ? { index: true, follow: true } : { index: false, follow: false },
};

export default function WebsitePrivacyPage() {
  const policyMode = websitePrivacyMode();
  if (policyMode === "hidden") notFound();
  return (
    <main className="min-h-screen px-5 pb-7 text-warm-ink sm:px-10 sm:pb-11 dark:text-[#f8efe4]">
      <div className="mx-auto max-w-6xl"><SubpageHeader /></div>
      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 mt-5 hidden flex-wrap items-center gap-2 text-xs text-warm-muted/80 sm:flex dark:text-[#bda995]/80">
          <Link href="/" className="transition hover:text-warm-ink dark:hover:text-[#f8efe4]">Chamyworks</Link>
          <span>/</span>
          <span>개인정보처리방침</span>
        </nav>
        <header className="mb-8 mt-7 border-b border-warm-muted/16 pb-7 sm:mb-10 sm:mt-0 sm:pb-8 dark:border-[#bda995]/18">
          <h1 className="break-keep text-[1.65rem] font-semibold leading-tight tracking-normal sm:text-4xl">
            <span className="block">{websitePrivacy.title}</span>
            <span className="mt-2 block text-lg font-medium text-warm-muted sm:text-xl dark:text-[#cdbdac]">{websitePrivacy.titleEn}</span>
          </h1>
          <p className="mt-4 text-xs text-warm-muted sm:text-sm dark:text-[#cdbdac]">최종 수정일: {websitePrivacy.updatedAt}</p>
        </header>
        <div className="space-y-8 text-[0.95rem] leading-7 text-warm-muted sm:space-y-9 sm:text-base sm:leading-8 dark:text-[#d9cabb]">
          <section className="space-y-3">
            {websitePrivacy.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </section>
          {websitePrivacy.sections.map(section => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-lg font-semibold text-warm-ink sm:text-xl dark:text-[#f8efe4]">{section.title}</h2>
              {section.paragraphs.map(paragraph => (
                <p key={paragraph}>
                  {paragraph.includes(websitePrivacy.email) ? <>
                    {paragraph.slice(0, paragraph.indexOf(websitePrivacy.email))}
                    <a href={`mailto:${websitePrivacy.email}`} className="text-warm-ink underline decoration-warm-muted/30 underline-offset-4 transition hover:decoration-warm-ink dark:text-[#f8efe4] dark:decoration-[#bda995]/40 dark:hover:decoration-[#f8efe4]">{websitePrivacy.email}</a>
                    {paragraph.slice(paragraph.indexOf(websitePrivacy.email) + websitePrivacy.email.length)}
                  </> : paragraph}
                </p>
              ))}
              {section.listItems ? <ul className="list-disc space-y-1.5 pl-5">{section.listItems.map(item => <li key={item}>{item}</li>)}</ul> : null}
              {section.table && (
                <table aria-label={section.title} className="w-full table-fixed border-collapse text-left text-sm leading-6 [overflow-wrap:anywhere] sm:text-base sm:leading-7">
                  <thead>
                    <tr className="border-b border-warm-muted/25 dark:border-[#bda995]/25">
                      {section.table.headers.map((header, index) => <th key={header} scope="col" className={`${index === 0 ? "w-[42%]" : "w-[58%]"} px-2 py-3 font-semibold text-warm-ink sm:px-3 dark:text-[#f8efe4]`}>{header}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map(([provider, purpose]) => (
                      <tr key={provider} className="border-b border-warm-muted/15 dark:border-[#bda995]/15">
                        <th scope="row" className="px-2 py-3 align-top font-normal sm:px-3">{provider}</th>
                        <td className="px-2 py-3 align-top sm:px-3">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {section.linkedParagraph && <p>{section.linkedParagraph.map((part, index) => part.href ? (
                <a key={index} href={part.href} target="_blank" rel="noopener noreferrer" className="text-warm-ink underline decoration-warm-muted/30 underline-offset-4 transition hover:decoration-warm-ink dark:text-[#f8efe4] dark:decoration-[#bda995]/40 dark:hover:decoration-[#f8efe4]">{part.text}</a>
              ) : <span key={index}>{part.text}</span>)}</p>}
              {section.closingParagraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
        <div className="mt-10 border-t border-warm-muted/14 pt-5 text-xs text-warm-muted/80 dark:border-[#bda995]/16 dark:text-[#cdbdac]/85">
          <Link href="/" className="font-medium underline decoration-warm-muted/25 underline-offset-4 transition hover:text-warm-ink hover:decoration-warm-ink dark:decoration-[#bda995]/35 dark:hover:text-[#f8efe4]">Chamyworks 홈으로 돌아가기</Link>
        </div>
        <SiteFooter />
      </article>
    </main>
  );
}
