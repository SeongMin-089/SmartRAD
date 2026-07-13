const plans = [
  {
    badge: "Starter",
    title: "\uC2A4\uD130\uD130 \uD50C\uB79C",
    description: "\uC778\uC0AC \uAD00\uB9AC\uB97C \uB9C9 \uC2DC\uC791\uD558\uB294 \uC18C\uADDC\uBAA8 \uD300\uC744 \uC704\uD55C \uAE30\uBCF8 \uD50C\uB79C\uC785\uB2C8\uB2E4.",
    price: "\u20A915,000",
    suffix: "/ \uC6D4",
    features: ["\uC9C1\uC6D0 \uC815\uBCF4 \uAD00\uB9AC", "\uAE30\uBCF8 \uADFC\uD0DC \uAD00\uB9AC", "\uD734\uAC00 \uC694\uCCAD \uAD00\uB9AC"],
    button: "\uC0C1\uB2F4\uD558\uAE30",
  },
  {
    badge: "Business",
    title: "\uBE44\uC988\uB2C8\uC2A4 \uD50C\uB79C",
    description: "\uCCB4\uACC4\uAC00 \uD544\uC694\uD55C \uC131\uC7A5\uD615 \uC911\uC18C\uAE30\uC5C5\uC744 \uC704\uD55C \uCD94\uCC9C \uD50C\uB79C\uC785\uB2C8\uB2E4.",
    price: "\u20A929,000",
    suffix: "/ \uC6D4",
    features: ["\uD1B5\uD569 \uB300\uC2DC\uBCF4\uB4DC", "\uC870\uC9C1\u00B7\uAD6C\uC131\uC6D0 \uAD00\uB9AC", "\uADFC\uD0DC\u00B7\uD734\uAC00 \uC2B9\uC778", "\uAE09\uC5EC \uC815\uC0B0 \uC790\uB3D9\uD654"],
    button: "\uC2DC\uC791\uD558\uAE30",
  },
  {
    badge: "Enterprise",
    title: "\uC5D4\uD130\uD504\uB77C\uC774\uC988",
    description: "\uB9DE\uCDA4\uD615 \uAE30\uB2A5\uC774 \uD544\uC694\uD55C \uB300\uADDC\uBAA8 \uAE30\uC5C5\uC744 \uC704\uD55C \uBCC4\uB3C4 \uC0C1\uB2F4 \uD50C\uB79C\uC785\uB2C8\uB2E4.",
    price: "\uBCC4\uB3C4 \uBB38\uC758",
    suffix: "",
    features: ["\uB9DE\uCDA4\uD615 \uAE30\uB2A5 \uC124\uACC4", "\uC804\uB2F4 \uB3C4\uC785 \uCEE8\uC124\uD305", "\uBCF4\uC548 \uC815\uCC45 \uC9C0\uC6D0"],
    button: "\uBB38\uC758\uD558\uAE30",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 min-[1440px]:px-0">
        <div className="text-center">
          <div className="inline-flex h-[38px] items-center gap-2 rounded-full border border-[#CFE1FF] bg-[#F1F7FF] px-[14px] text-[13px] font-bold text-[#1E5BC6]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDF9F3]"><span className="h-2 w-2 rounded-full bg-[#32C9A5]" /></span>
            <span>{"\uC694\uAE08\uC81C"}</span>
          </div>
          <h2 className="mt-6 text-[36px] font-extrabold leading-[48px] tracking-[-3px] text-[#102A50] sm:text-[46px] sm:leading-[62px]">
            <span className="block">{"\uAE30\uC5C5 \uADDC\uBAA8\uC5D0 \uB9DE\uB294 \uD50C\uB79C\uC73C\uB85C"}</span>
            <span className="block">{"\uC2DC\uC791\uD558\uC138\uC694"}</span>
          </h2>
          <p className="mt-10 text-[16px] font-bold leading-7 text-[#435B80]">{"\uC778\uC0AC \uAD00\uB9AC\uB97C \uB9C9 \uC2DC\uC791\uD558\uB294 \uD300\uBD80\uD130 \uB9DE\uCDA4\uD615 \uAE30\uB2A5\uC774 \uD544\uC694\uD55C \uB300\uADDC\uBAA8 \uAE30\uC5C5\uAE4C\uC9C0, \uD544\uC694\uD55C \uBC94\uC704\uC5D0 \uB9DE\uCDB0 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}</p>
        </div>
        <div className="mt-20 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.badge} className="group flex min-h-[528px] flex-col rounded-[26px] border border-[#D9E7FA] bg-white p-9 text-[#102A50] transition-all duration-300 ease-out hover:z-10 hover:border-[#2868F6] hover:bg-gradient-to-br hover:from-[#174CB7] hover:via-[#246BFE] hover:to-[#4BABFA] hover:text-white hover:shadow-xl md:hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none">
              <span className="w-fit rounded-full bg-[#EAF3FF] px-3 py-2 text-[11px] font-bold text-[#2868F6] transition-colors duration-300 ease-out group-hover:bg-white/15 group-hover:text-white motion-reduce:transition-none">{plan.badge}</span>
              <h3 className="mt-6 text-[27px] font-extrabold transition-colors duration-300 ease-out motion-reduce:transition-none">{plan.title}</h3>
              <p className="mt-3 min-h-[48px] text-[14px] font-semibold leading-6 text-[#435B80] transition-colors duration-300 ease-out group-hover:text-white/75 motion-reduce:transition-none">{plan.description}</p>
              <p className="mt-12 flex items-end gap-1 transition-colors duration-300 ease-out motion-reduce:transition-none"><span className="text-[42px] font-extrabold tracking-[-2px] transition-colors duration-300 ease-out motion-reduce:transition-none">{plan.price}</span>{plan.suffix && <span className="pb-2 text-[12px] font-bold text-[#6B7F9F] transition-colors duration-300 ease-out group-hover:text-white/70 motion-reduce:transition-none">{plan.suffix}</span>}</p>
              <ul className="mt-6 space-y-3 text-[14px] font-bold text-[#435B80] transition-colors duration-300 ease-out group-hover:text-white/85 motion-reduce:transition-none">
                {plan.features.map((feature) => <li key={feature}>{`\u2713 ${feature}`}</li>)}
              </ul>
              <a href="#contact" className="mt-auto flex h-[54px] items-center justify-center rounded-[14px] border border-transparent bg-[#102A50] text-[15px] font-extrabold text-white! transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-[#2868F6]! motion-reduce:transition-none">{plan.button}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
