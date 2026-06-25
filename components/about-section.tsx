export function AboutSection() {
  return (
    <section className="w-full text-center">
      <div className="mx-auto max-w-[29rem] text-[0.86rem] leading-[2.18] text-warm-muted sm:max-w-[27.5rem] sm:text-[1rem] sm:leading-[2.08] dark:text-[#d9cabb]">
        <p className="whitespace-nowrap">
          <span className="block">Chamyworks(차미웍스)는</span>
          <span className="block">작은 아이디어에 진심을 담아,</span>
          <span className="block">일상에 행복을 더하는 작업실입니다.</span>
        </p>

        <p className="my-5 whitespace-nowrap text-[0.84rem] leading-[1.9] sm:my-6 sm:text-[0.96rem] dark:text-[#cdbdac]">
          ‘Cham for you’
        </p>

        <p className="whitespace-nowrap">
          <span className="block">
            <span className="font-semibold text-warm-ink/90 dark:text-[#eadccd]">
              CHAMY
            </span>
            는 Cham(참, 眞 : 진심)과
          </span>
          <span className="block">Y(You : 당신)을 담은 이름입니다.</span>
        </p>
      </div>
    </section>
  );
}
