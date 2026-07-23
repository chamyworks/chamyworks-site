import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SubpageHeader } from "@/components/subpage-header";

export const metadata: Metadata = {
  title: "About Chamyworks | Chamyworks",
  description:
    "작은 아이디어에 진심을 담아, 일상에 즐거움을 더하는 차미웍스를 소개합니다.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="px-5 pb-10 text-warm-ink sm:px-10 sm:pb-14 dark:text-[#f8efe4]">
      <div className="mx-auto w-full max-w-6xl">
        <SubpageHeader />

        <article className="mx-auto max-w-3xl py-10 text-center sm:py-14">
          <h1 className="text-[2.35rem] font-semibold leading-tight tracking-normal sm:text-[3.5rem]">
            About Chamyworks
          </h1>

          <div className="mx-auto mt-8 max-w-[30rem] space-y-6 text-[0.96rem] leading-[2] text-warm-muted sm:mt-10 sm:text-lg dark:text-[#d9cabb]">
            <p>
              <span className="block">Chamyworks(차미웍스)는</span>
              <span className="block">작은 아이디어에 진심을 담아,</span>
              <span className="block">일상에 즐거움을 더하는 작업실입니다.</span>
            </p>

            <p className="text-[0.92rem] text-[#6b5448] sm:text-base dark:text-[#cdbdac]">
              ‘Cham for you’
            </p>

            <p>
              <span className="block">
                <span className="font-semibold text-warm-ink dark:text-[#f8efe4]">
                  CHAMY
                </span>
                는 Cham(참, 眞 : 진심)과
              </span>
              <span className="block">Y(You : 당신)을 담은 이름입니다.</span>
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[30rem] border-t border-[#e8ded5] pt-6 text-sm text-warm-muted sm:mt-12 dark:border-[#bda995]/16 dark:text-[#d9cabb]">
            <a
              href="mailto:help@chamyworks.com"
              className="font-medium underline decoration-warm-muted/30 underline-offset-4 transition hover:text-warm-ink hover:decoration-warm-ink dark:hover:text-[#f8efe4]"
            >
              help@chamyworks.com
            </a>
          </div>

          <SiteFooter />
        </article>
      </div>
    </main>
  );
}
