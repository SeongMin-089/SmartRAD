const benefits = [
  {
    number: "01",
    title: "\uC555\uB3C4\uC801\uC778 \uC5C5\uBB34 \uD6A8\uC728",
    description: "\uC218\uAE30 \uC5C5\uBB34 \uBC0F \uB2E8\uC21C \uBC18\uBCF5 \uC5C5\uBB34\uB97C \uC904\uC5EC \uC778\uC0AC\uD300\uC774 \uB354 \uC911\uC694\uD55C \uC5C5\uBB34\uC5D0 \uC9D1\uC911\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  },
  {
    number: "02",
    title: "\uD569\uB9AC\uC801\uC778 \uB3C4\uC785 \uBE44\uC6A9",
    description: "\uBCF5\uC7A1\uD55C \uAD6C\uCD95\uD615 \uC2DC\uC2A4\uD15C \uB300\uBE44 \uB0AE\uC740 \uBE44\uC6A9\uC758 \uD074\uB77C\uC6B0\uB4DC \uC11C\uBE44\uC2A4\uB85C \uBE60\uB974\uAC8C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  },
  {
    number: "03",
    title: "\uC9C1\uAD00\uC801\uC778 \uC0AC\uC6A9\uC131",
    description: "\uBCC4\uB3C4 \uAD50\uC721 \uC5C6\uC774 \uB204\uAD6C\uB098 \uBC14\uB85C \uC4F8 \uC218 \uC788\uB3C4\uB85D \uD575\uC2EC \uC815\uBCF4\uB97C \uC120\uBA85\uD558\uAC8C \uBCF4\uC5EC\uC8FC\uB294 UI\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.",
  },
  {
    number: "04",
    title: "\uAC15\uB825\uD55C \uB370\uC774\uD130 \uBCF4\uC548",
    description: "\uBBFC\uAC10\uD55C \uC778\uC0AC \uC815\uBCF4\uB97C \uC548\uC804\uD558\uAC8C \uC554\uD638\uD654 \uBCF4\uAD00\uD558\uACE0 \uAD8C\uD55C\uC5D0 \uB530\uB77C \uC811\uADFC\uC744 \uC81C\uC5B4\uD569\uB2C8\uB2E4.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full bg-[#F4F8FF] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 min-[1440px]:px-0">
        <div className="inline-flex h-[38px] items-center gap-2 rounded-full border border-[#CFE1FF] bg-[#EAF3FF] px-[14px] text-[13px] font-bold text-[#1E5BC6]">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDF9F3]"><span className="h-2 w-2 rounded-full bg-[#32C9A5]" /></span>
          <span>{"\uC7A5\uC810"}</span>
        </div>
        <h2 className="mt-7 text-[34px] font-extrabold tracking-[-2px] text-[#102A50] sm:text-[46px] sm:tracking-[-3px]">
          {"\uC778\uC0AC\uD300\uC774 \uCCB4\uAC10\uD558\uB294 \uBCC0\uD654\uB294 \uBD84\uBA85\uD569\uB2C8\uB2E4"}
        </h2>
        <p className="mt-6 text-[16px] font-bold leading-7 text-[#435B80]">
          {"\uC218\uAE30 \uC5C5\uBB34\uC640 \uBC18\uBCF5 \uD655\uC778\uC744 \uC904\uC774\uACE0, \uD569\uB9AC\uC801\uC778 \uBE44\uC6A9\uC73C\uB85C \uC548\uC804\uD558\uACE0 \uC9C1\uAD00\uC801\uC778 \uC778\uC0AC\uAD00\uB9AC \uD658\uACBD\uC744 \uAD6C\uCD95\uD569\uB2C8\uB2E4."}
        </p>
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.number} className="flex min-h-[270px] flex-col rounded-[24px] border border-[#E2ECFA] bg-white p-[30px] shadow-[0_16px_38px_rgba(50,94,160,0.07)] transition-all duration-300 ease-out md:hover:-translate-y-1 md:hover:border-[#C5D9F5] md:hover:shadow-[0_20px_44px_rgba(50,94,160,0.12)] motion-reduce:transform-none motion-reduce:transition-none">
              <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[16px] bg-[#EAF3FF] text-[18px] font-bold text-[#2868F6] transition-colors duration-300 ease-out motion-reduce:transition-none">{benefit.number}</span>
              <h3 className="mt-6 text-[21px] font-extrabold text-[#102A50]">{benefit.title}</h3>
              <p className="mt-3 text-[15px] font-semibold leading-[26px] text-[#435B80]">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
