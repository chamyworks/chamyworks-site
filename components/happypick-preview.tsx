"use client";

import { useState } from "react";
import Image from "next/image";

type HappyPickSlide = {
  src: string;
  alt: string;
};

type HappyPickFeature = {
  icon: string;
  title: string;
};

type HappyPickPreviewProps = {
  appStoreUrl: string;
  googlePlayUrl?: string;
  features: HappyPickFeature[];
  slides: HappyPickSlide[];
};

export function HappyPickPreview({
  appStoreUrl,
  googlePlayUrl,
  features,
  slides,
}: HappyPickPreviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  return (
    <section aria-label="Happy Pick 앱 화면" className="pb-9 sm:pb-12">
      <div className="grid justify-center gap-7 lg:grid-cols-[19.5rem_minmax(21rem,24rem)] lg:items-start lg:gap-8 xl:gap-10">
        <div className="mx-auto w-full max-w-[17rem] sm:max-w-[18.5rem] lg:max-w-[19.5rem]">
          <figure>
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              width={1242}
              height={2688}
              className="h-auto w-full rounded-md shadow-[0_16px_36px_rgba(92,70,52,0.14)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.2)]"
              sizes="(min-width: 1024px) 312px, (min-width: 640px) 296px, 76vw"
              priority={activeIndex === 0}
            />
          </figure>

          <div className="mt-3 flex items-center justify-center gap-3 sm:mt-4">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="이전 스크린샷"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-muted/18 bg-white/48 text-base text-warm-ink shadow-[0_8px_20px_rgba(92,70,52,0.08)] transition hover:border-warm-muted/32 hover:bg-white/72 sm:h-10 sm:w-10 sm:text-lg dark:border-[#bda995]/18 dark:bg-[#261d17]/62 dark:text-[#f8efe4]"
            >
              ←
            </button>
            <div className="flex items-center gap-2" aria-label="스크린샷 순서">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${index + 1}번 스크린샷 보기`}
                  aria-current={index === activeIndex}
                  className={`h-2 rounded-full transition sm:h-2.5 ${
                    index === activeIndex
                      ? "w-5 bg-warm-ink sm:w-6 dark:bg-[#f8efe4]"
                      : "w-2 bg-warm-muted/28 hover:bg-warm-muted/48 sm:w-2.5 dark:bg-[#bda995]/32"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={showNext}
              aria-label="다음 스크린샷"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-muted/18 bg-white/48 text-base text-warm-ink shadow-[0_8px_20px_rgba(92,70,52,0.08)] transition hover:border-warm-muted/32 hover:bg-white/72 sm:h-10 sm:w-10 sm:text-lg dark:border-[#bda995]/18 dark:bg-[#261d17]/62 dark:text-[#f8efe4]"
            >
              →
            </button>
          </div>
        </div>

        <div className="mx-auto flex max-w-[28rem] flex-col text-left lg:mx-0 lg:max-w-none lg:pt-1">
          <div>
            <div className="space-y-2.5 text-[0.95rem] leading-[1.75] text-warm-muted sm:text-base sm:leading-[1.85] dark:text-[#d9cabb]">
              <p>
                해피픽은 하루의 좋은 순간을
                <br />
                부담 없이 기록하고
                <br />
                차곡차곡 모으는 앱입니다.
              </p>
              <p>짧은 한 줄이면 충분해요.</p>
              <p>
                행복을 기록할수록
                <br />
                저금통에 하나씩 쌓이고,
              </p>
              <p>
                월별과 연도별로
                <br />
                지나간 행복을 다시 돌아볼 수 있습니다.
              </p>
            </div>

            <ul className="mx-auto mt-7 grid max-w-[18.5rem] gap-2.5 border-t border-warm-muted/12 pt-5 text-left text-[0.94rem] font-medium text-warm-ink sm:mx-0 sm:max-w-none sm:grid-cols-2 sm:text-[0.95rem] lg:grid-cols-1 dark:border-[#bda995]/16 dark:text-[#f8efe4]">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="w-5 shrink-0 text-center">
                    {feature.icon}
                  </span>
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 border-t border-warm-muted/12 pt-5 dark:border-[#bda995]/16">
            <p className="text-center text-sm font-medium text-warm-muted lg:text-left dark:text-[#d9cabb]">
              iPhone과 Android에서 만나보세요.
            </p>

            {appStoreUrl ? (
              <div className="mt-3">
                <div className="mx-auto grid w-full max-w-[17rem] grid-cols-2 items-center justify-items-center gap-2 lg:hidden">
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="App Store에서 Happy Pick 다운로드"
                    className="inline-flex h-10 w-[8.125rem] items-center justify-center"
                  >
                    <Image
                      src="/apps/happypick/app-store-badge-ko.svg"
                      alt="App Store에서 다운로드"
                      width={130}
                      height={40}
                      unoptimized
                      className="block h-10 w-auto"
                    />
                  </a>

                  {googlePlayUrl ? (
                    <a
                      href={googlePlayUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Google Play에서 Happy Pick 다운로드"
                      className="inline-flex h-10 w-[8.125rem] items-center justify-center"
                    >
                      <Image
                        src="/apps/happypick/google-play-badge-ko.png"
                        alt="Google Play에서 다운로드"
                        width={646}
                        height={250}
                        unoptimized
                        className="block h-10 w-auto"
                      />
                    </a>
                  ) : null}
                </div>

                <div className="hidden items-start gap-5 lg:flex">
                  <div className="flex min-w-[8.125rem] flex-col items-center">
                    <a
                      href={appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="App Store에서 Happy Pick 다운로드"
                      className="inline-flex h-10 w-[8.125rem] items-center justify-center"
                    >
                      <Image
                        src="/apps/happypick/app-store-badge-ko.svg"
                        alt="App Store에서 다운로드"
                        width={130}
                        height={40}
                        unoptimized
                        className="block h-10 w-auto"
                      />
                    </a>
                    <a
                      href={appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="App Store에서 Happy Pick 다운로드"
                      className="mt-2 bg-white p-2"
                    >
                      <Image
                        src="/apps/happypick/app-store-qr.png"
                        alt="Happy Pick App Store 다운로드 QR 코드"
                        width={400}
                        height={400}
                        unoptimized
                        className="block h-[4.5rem] w-[4.5rem]"
                      />
                    </a>
                    <span className="mt-1.5 text-xs font-medium text-warm-muted dark:text-[#cdbdac]">
                      App Store
                    </span>
                  </div>

                  {googlePlayUrl ? (
                    <div className="flex min-w-[8.125rem] flex-col items-center">
                      <a
                        href={googlePlayUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Google Play에서 Happy Pick 다운로드"
                        className="inline-flex h-10 w-[8.125rem] items-center justify-center"
                      >
                        <Image
                          src="/apps/happypick/google-play-badge-ko.png"
                          alt="Google Play에서 다운로드"
                          width={646}
                          height={250}
                          unoptimized
                          className="block h-10 w-auto"
                        />
                      </a>
                      <a
                        href={googlePlayUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Google Play에서 Happy Pick 다운로드"
                        className="mt-2 bg-white p-2"
                      >
                        <Image
                          src="/apps/happypick/google-play-qr.png"
                          alt="Happy Pick Google Play 다운로드 QR 코드"
                          width={400}
                          height={400}
                          unoptimized
                          className="block h-[4.5rem] w-[4.5rem]"
                        />
                      </a>
                      <span className="mt-1.5 text-xs font-medium text-warm-muted dark:text-[#cdbdac]">
                        Google Play
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="mt-3 flex justify-center lg:justify-start">
                <span className="inline-flex h-11 min-w-36 items-center justify-center rounded-full border border-warm-muted/20 bg-white/42 px-5 text-sm font-semibold text-warm-muted shadow-[0_10px_24px_rgba(50,37,29,0.07)] dark:border-[#bda995]/20 dark:bg-[#2a211a]/60 dark:text-[#cdbdac]">
                  Coming Soon
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
