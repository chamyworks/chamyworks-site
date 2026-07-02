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
  features: HappyPickFeature[];
  slides: HappyPickSlide[];
};

export function HappyPickPreview({
  appStoreUrl,
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
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.86fr)_minmax(20rem,0.82fr)] lg:items-start lg:gap-10">
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

        <div className="mx-auto flex max-w-[30rem] flex-col text-left lg:mx-0">
          <div>
            <div className="space-y-3 text-[0.95rem] leading-7 text-warm-muted sm:text-base sm:leading-8 dark:text-[#d9cabb]">
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

            <ul className="mx-auto mt-4 grid max-w-[18.5rem] gap-2 text-left text-[0.94rem] font-medium text-warm-ink sm:mx-0 sm:max-w-none sm:grid-cols-2 sm:text-[0.95rem] lg:grid-cols-1 dark:text-[#f8efe4]">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-center gap-2">
                  <span aria-hidden="true">{feature.icon}</span>
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex justify-center sm:justify-start">
            {appStoreUrl ? (
              <a
                href={appStoreUrl}
                className="inline-flex h-11 min-w-36 items-center justify-center rounded-full bg-warm-ink px-5 text-sm font-semibold text-warm-paper shadow-[0_12px_28px_rgba(50,37,29,0.14)] transition hover:-translate-y-0.5 hover:bg-warm-ink/90 dark:bg-[#f8efe4] dark:text-[#17120f]"
              >
                App Store
              </a>
            ) : (
              <span className="inline-flex h-11 min-w-36 items-center justify-center rounded-full border border-warm-muted/20 bg-white/42 px-5 text-sm font-semibold text-warm-muted shadow-[0_10px_24px_rgba(50,37,29,0.07)] dark:border-[#bda995]/20 dark:bg-[#2a211a]/60 dark:text-[#cdbdac]">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
