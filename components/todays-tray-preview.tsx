"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    src: "/games/todays-tray/screenshot-home.png",
    alt: "오늘의 식판 게임 시작 화면",
  },
  {
    src: "/games/todays-tray/screenshot-gameplay.png",
    alt: "주문 식판에 음식을 담는 오늘의 식판 플레이 화면",
  },
  {
    src: "/games/todays-tray/screenshot-special.png",
    alt: "특식이 등장한 오늘의 식판 플레이 화면",
  },
];

const features = [
  "주문 식판을 빠르게 확인하고",
  "알맞은 칸에 음식을 담아",
  "나의 최고 기록에 도전해요",
];

export function TodaysTrayPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  return (
    <section
      aria-label="오늘의 식판 게임 화면"
      className="grid items-start gap-8 pb-10 lg:grid-cols-[minmax(17rem,20rem)_minmax(20rem,28rem)] lg:justify-center lg:gap-14 sm:pb-12"
    >
      <div className="mx-auto w-full max-w-[17.5rem] sm:max-w-[19rem]">
        <figure>
          <Image
            src={activeSlide.src}
            alt={activeSlide.alt}
            width={390}
            height={844}
            priority
            className="h-auto w-full rounded-md shadow-[0_16px_38px_rgba(92,70,52,0.15)] dark:shadow-[0_18px_42px_rgba(0,0,0,0.26)]"
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 304px, 78vw"
          />
        </figure>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="이전 게임 화면"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-muted/18 bg-white/48 text-base text-warm-ink shadow-[0_8px_20px_rgba(92,70,52,0.08)] transition hover:border-warm-muted/32 hover:bg-white/72 dark:border-[#bda995]/18 dark:bg-[#261d17]/62 dark:text-[#f8efe4]"
          >
            ←
          </button>
          <div className="flex items-center gap-2" aria-label="게임 화면 순서">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${index + 1}번 게임 화면 보기`}
                aria-current={index === activeIndex}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "w-6 bg-warm-ink dark:bg-[#f8efe4]"
                    : "w-2.5 bg-warm-muted/28 hover:bg-warm-muted/48 dark:bg-[#bda995]/32"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={showNext}
            aria-label="다음 게임 화면"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-muted/18 bg-white/48 text-base text-warm-ink shadow-[0_8px_20px_rgba(92,70,52,0.08)] transition hover:border-warm-muted/32 hover:bg-white/72 dark:border-[#bda995]/18 dark:bg-[#261d17]/62 dark:text-[#f8efe4]"
          >
            →
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[28rem] pt-1 text-left lg:mx-0 lg:pt-2">
        <p className="text-[0.98rem] leading-7 text-warm-muted sm:text-base sm:leading-8 dark:text-[#d9cabb]">
          주문 식판을 보고 차례로 나오는 음식을
          <br className="hidden sm:block" /> 알맞은 칸에 빠르게 담아보세요.
        </p>

        <ul className="mt-6 space-y-3 border-t border-warm-muted/14 pt-5 text-[0.94rem] font-medium text-warm-ink sm:text-base dark:border-[#bda995]/16 dark:text-[#f8efe4]">
          {features.map((feature, index) => (
            <li key={feature} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f2dfb9] text-xs font-semibold text-[#6b5448] dark:bg-[#6b5448]/58 dark:text-[#f8efe4]"
              >
                {index + 1}
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex justify-center lg:justify-start">
          <span className="inline-flex h-11 min-w-36 items-center justify-center rounded-full border border-warm-muted/20 bg-white/42 px-5 text-sm font-semibold text-warm-muted shadow-[0_10px_24px_rgba(50,37,29,0.07)] dark:border-[#bda995]/20 dark:bg-[#2a211a]/60 dark:text-[#cdbdac]">
            Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
