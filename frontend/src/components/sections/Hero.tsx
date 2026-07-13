import Image from "next/image"

const highlights = [
  { title: "4 Core", description: "\uD575\uC2EC HR \uAE30\uB2A5 \uD1B5\uD569" },
  {
    title: "1/10",
    description: "\uAD6C\uCD95 \uB300\uBE44 \uD569\uB9AC\uC801 \uBE44\uC6A9",
  },
  {
    title: "Secure",
    description: "\uBBFC\uAC10 \uC815\uBCF4 \uC554\uD638\uD654 \uBCF4\uAD00",
  },
]

export default function Hero() {
  return (
    <section className="w-full bg-[radial-gradient(circle_at_82%_8%,#EAF3FF_0%,#F5F9FF_26%,#FFFFFF_58%)]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-6 py-20 min-[1440px]:px-0 lg:flex-row lg:gap-16">
        <div className="w-full max-w-[540px] shrink-0">
          <div className="mb-7 inline-flex h-[38px] items-center gap-2 rounded-full border border-[#CFE1FF] bg-[#F1F7FF] px-[14px] text-[13px] font-bold tracking-[0] text-[#1E5BC6]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDF9F3]">
              <span className="h-2 w-2 rounded-full bg-[#32C9A5]" />
            </span>
            <span>
              {
                "\uAE30\uC5C5 \uC778\uC0AC\uAD00\uB9AC\uB97C \uC704\uD55C HR ERP"
              }
            </span>
          </div>

          <h1 className="text-[44px] font-bold leading-[50px] tracking-[-5px] sm:text-[52px] sm:leading-[58px] sm:tracking-[-6px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-8px]">
            <span className="block text-[#102A50]">
              {"\uC778\uC0AC\uAD00\uB9AC\uC758"}
            </span>
            <span className="block text-[#102A50]">{"\uD750\uB984\uC744"}</span>
            <span className="block text-[#2868F6]">{"\uD558\uB098\uB85C"}</span>
            <span className="block text-[#2868F6]">
              {"\uC5F0\uACB0\uD569\uB2C8\uB2E4."}
            </span>
          </h1>

          <p className="mt-8 max-w-[530px] text-[18px] font-bold leading-[30px] tracking-[0] text-[#435B80] sm:text-[22px] sm:leading-[35.6px]">
            <span className="block">
              {
                "\uC9C1\uC6D0 \uC815\uBCF4, \uC870\uC9C1, \uADFC\uD0DC, \uD734\uAC00, \uAE09\uC5EC \uC815\uC0B0\uAE4C\uC9C0."
              }
            </span>
            <span className="block">
              {
                "SmartHR\uC740 \uAE30\uC5C5 \uC778\uC0AC\uAD00\uB9AC\uC5D0 \uD544\uC694\uD55C \uD575\uC2EC \uC5C5\uBB34\uB97C"
              }
            </span>
            <span className="block">
              {
                "\uC9C1\uAD00\uC801\uC778 \uD654\uBA74\uACFC \uC790\uB3D9\uD654\uB41C \uD750\uB984\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4."
              }
            </span>
          </p>

          <div className="mt-[42px] flex flex-wrap gap-[14px]">
            <a
              href="#features"
              className="flex h-[54px] items-center justify-center whitespace-nowrap rounded-full bg-[#2868F6] px-9 text-[15px] font-extrabold text-white! hover:bg-[#1E56D8]"
            >
              {"\uC8FC\uC694 \uAE30\uB2A5 \uBCF4\uAE30"}
            </a>
            <a
              href="#contact"
              className="flex h-[54px] items-center justify-center whitespace-nowrap rounded-full border border-[#CFE1FF] bg-white px-9 text-[15px] font-extrabold text-[#1E5BC6]! hover:bg-[#F3F7FF]"
            >
              {"\uB3C4\uC785 \uC0C1\uB2F4 \uC694\uCCAD"}
            </a>
          </div>

          <div className="mt-11 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="h-[84px] rounded-[18px] border border-[#D9E7FA] bg-white px-[18px] py-4 shadow-[0_12px_30px_rgba(50,94,160,0.07)]"
              >
                <p className="text-[24px] font-extrabold leading-none text-[#102A50]">
                  {item.title}
                </p>
                <p className="mt-2 whitespace-nowrap text-[12px] font-bold leading-none text-[#6B7F9F]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end">
          <Image
            src="/hero-dashboard.svg"
            alt={
              "SmartHR \uC778\uC0AC\uAD00\uB9AC \uB300\uC2DC\uBCF4\uB4DC \uD654\uBA74"
            }
            width={3844}
            height={3120}
            priority
            sizes="(max-width: 1023px) 100vw, 750px"
            className="h-auto w-full max-w-[750px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
