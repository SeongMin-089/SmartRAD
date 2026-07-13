"use client";

import Image from "next/image";
import { useState } from "react";

type Feature = {
  number: string;
  title: string;
  summary: string;
  previewTitle: string;
  previewImage: string;
  detailTitle: string;
  detailDescription: string;
  detailItems: string[];
  stats: { value: string; label: string }[];
};

const features: Feature[] = [
  {
    number: "01",
    title: "\uD1B5\uD569 \uB300\uC2DC\uBCF4\uB4DC",
    summary:
      "\uC804\uC0AC \uC778\uC6D0, \uADFC\uD0DC, \uD734\uAC00 \uD604\uD669\uC744 \uD55C\uB208\uC5D0 \uD30C\uC545\uD558\uC5EC \uC6B4\uC601 \uC0C1\uD669\uC744 \uBE60\uB974\uAC8C \uD655\uC778\uD569\uB2C8\uB2E4.",
    previewTitle: "\uD1B5\uD569 \uB300\uC2DC\uBCF4\uB4DC \uBBF8\uB9AC\uBCF4\uAE30",
    previewImage: "/feature-dashboard.svg",
    detailTitle: "\uC804\uC0AC \uC778\uC0AC \uD604\uD669\uC744 \uD55C\uB208\uC5D0",
    detailDescription:
      "\uC778\uC6D0, \uADFC\uD0DC, \uD734\uAC00, \uACB0\uC7AC \uB300\uAE30 \uD604\uD669\uC744 \uB300\uC2DC\uBCF4\uB4DC\uC5D0\uC11C \uBC14\uB85C \uD655\uC778\uD569\uB2C8\uB2E4. \uC778\uC0AC \uB2F4\uB2F9\uC790\uB294 \uC5EC\uB7EC \uBA54\uB274\uB97C \uC774\uB3D9\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uC624\uB298 \uD544\uC694\uD55C \uC5C5\uBB34\uB97C \uBE60\uB974\uAC8C \uD30C\uC545\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    detailItems: ["\uB370\uC774\uD130 \uC218\uC9D1", "\uD604\uD669 \uC694\uC57D", "\uBE60\uB978 \uC758\uC0AC\uACB0\uC815"],
    stats: [
      { value: "248\uBA85", label: "\uC804\uCCB4 \uAD6C\uC131\uC6D0" },
      { value: "96%", label: "\uC624\uB298 \uCD9C\uADFC\uC728" },
      { value: "32\uAC74", label: "\uC2B9\uC778 \uB300\uAE30" },
    ],
  },
  {
    number: "02",
    title: "\uC870\uC9C1\u00B7\uAD6C\uC131\uC6D0 \uAD00\uB9AC",
    summary:
      "\uC9C1\uC6D0 \uC815\uBCF4, \uBD80\uC11C, \uC9C1\uAE09, \uC7AC\uC9C1 \uC0C1\uD0DC\uB97C \uD558\uB098\uC758 \uAE30\uC900\uC73C\uB85C \uD1B5\uD569 \uAD00\uB9AC\uD569\uB2C8\uB2E4.",
    previewTitle: "\uC870\uC9C1\u00B7\uAD6C\uC131\uC6D0 \uAD00\uB9AC \uBBF8\uB9AC\uBCF4\uAE30",
    previewImage: "/feature-members.svg",
    detailTitle: "\uAD6C\uC131\uC6D0 \uC815\uBCF4\uB97C \uCCB4\uACC4\uC801\uC73C\uB85C \uAD00\uB9AC",
    detailDescription:
      "\uC9C1\uC6D0 \uAE30\uBCF8 \uC815\uBCF4\uC640 \uBD80\uC11C, \uC9C1\uAE09, \uC7AC\uC9C1 \uC0C1\uD0DC\uB97C \uD55C \uD654\uBA74\uC5D0\uC11C \uAD00\uB9AC\uD558\uACE0 \uD544\uC694\uD55C \uC815\uBCF4\uB97C \uBE60\uB974\uAC8C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    detailItems: ["\uC9C1\uC6D0 \uC815\uBCF4 \uD1B5\uD569", "\uBD80\uC11C\u00B7\uC9C1\uAE09 \uAD00\uB9AC", "\uC7AC\uC9C1 \uC0C1\uD0DC \uAD00\uB9AC"],
    stats: [
      { value: "248\uBA85", label: "\uC804\uCCB4 \uC9C1\uC6D0" },
      { value: "12\uAC1C", label: "\uC6B4\uC601 \uBD80\uC11C" },
      { value: "8\uAC1C", label: "\uC9C1\uAE09 \uCCB4\uACC4" },
    ],
  },
  {
    number: "03",
    title: "\uADFC\uD0DC\u00B7\uD734\uAC00 \uAD00\uB9AC",
    summary:
      "\uCD9C\uD1F4\uADFC \uAE30\uB85D \uC5F0\uB3D9\uACFC \uD734\uAC00 \uC2E0\uCCAD, \uC2B9\uC778 \uD750\uB984\uC744 \uAC04\uD3B8\uD558\uAC8C \uCC98\uB9AC\uD569\uB2C8\uB2E4.",
    previewTitle: "\uADFC\uD0DC\u00B7\uD734\uAC00 \uAD00\uB9AC \uBBF8\uB9AC\uBCF4\uAE30",
    previewImage: "/feature-attendance.svg",
    detailTitle: "\uADFC\uD0DC\uC640 \uD734\uAC00 \uD750\uB984\uC744 \uAC04\uD3B8\uD558\uAC8C",
    detailDescription:
      "\uCD9C\uD1F4\uADFC \uAE30\uB85D\uACFC \uD734\uAC00 \uC2E0\uCCAD, \uC2B9\uC778 \uC0C1\uD0DC\uB97C \uD55C\uACF3\uC5D0\uC11C \uD655\uC778\uD558\uACE0 \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    detailItems: ["\uCD9C\uD1F4\uADFC \uAE30\uB85D", "\uD734\uAC00 \uC2E0\uCCAD", "\uC2B9\uC778 \uC0C1\uD0DC \uD655\uC778"],
    stats: [
      { value: "231\uBA85", label: "\uC624\uB298 \uCD9C\uADFC" },
      { value: "8\uBA85", label: "\uD734\uAC00\uC790" },
      { value: "12\uAC74", label: "\uD734\uAC00 \uC2E0\uCCAD" },
    ],
  },
  {
    number: "04",
    title: "\uAE09\uC5EC \uC815\uC0B0 \uC790\uB3D9\uD654",
    summary:
      "\uC218\uB2F9\uACFC \uACF5\uC81C\uB97C \uC790\uB3D9 \uACC4\uC0B0\uD558\uACE0 \uAE09\uC5EC\uBA85\uC138\uC11C \uBC1C\uC1A1\uAE4C\uC9C0 \uD6A8\uC728\uC801\uC73C\uB85C \uAD00\uB9AC\uD569\uB2C8\uB2E4.",
    previewTitle: "\uAE09\uC5EC \uC815\uC0B0 \uC790\uB3D9\uD654 \uBBF8\uB9AC\uBCF4\uAE30",
    previewImage: "/feature-payroll.svg",
    detailTitle: "\uBCF5\uC7A1\uD55C \uAE09\uC5EC \uC815\uC0B0\uC744 \uC790\uB3D9\uD654",
    detailDescription:
      "\uADFC\uD0DC \uB370\uC774\uD130\uB97C \uAE30\uBC18\uC73C\uB85C \uC218\uB2F9\uACFC \uACF5\uC81C\uB97C \uACC4\uC0B0\uD558\uACE0 \uAE09\uC5EC\uBA85\uC138\uC11C \uBC1C\uC1A1\uAE4C\uC9C0 \uD55C \uBC88\uC5D0 \uCC98\uB9AC\uD569\uB2C8\uB2E4.",
    detailItems: ["\uC218\uB2F9 \uC790\uB3D9 \uACC4\uC0B0", "\uACF5\uC81C \uD56D\uBAA9 \uAD00\uB9AC", "\uAE09\uC5EC\uBA85\uC138\uC11C \uBC1C\uC1A1"],
    stats: [
      { value: "248\uBA85", label: "\uC815\uC0B0 \uB300\uC0C1" },
      { value: "100%", label: "\uC790\uB3D9 \uACC4\uC0B0" },
      { value: "1\uC77C", label: "\uC77C\uAD04 \uBC1C\uC1A1" },
    ],
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const activeFeature = features[activeIndex];
  const imageFailed = failedImage === activeFeature.previewImage;

  return (
    <section id="features" className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 min-[1440px]:px-0">
        <div className="text-center">
          <div className="inline-flex h-[38px] items-center gap-2 rounded-full border border-[#CFE1FF] bg-[#F1F7FF] px-[14px] text-[13px] font-bold text-[#1E5BC6]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDF9F3]">
              <span className="h-2 w-2 rounded-full bg-[#32C9A5]" />
            </span>
            <span>{"\uC8FC\uC694 \uAE30\uB2A5"}</span>
          </div>
          <h2 className="mt-5 text-[34px] font-extrabold tracking-[-2px] text-[#102A50] sm:text-[44px] sm:tracking-[-3px]">
            {"\uC778\uC0AC\uAD00\uB9AC ERP\uC758 \uD575\uC2EC \uAE30\uB2A5"}
          </h2>
          <p className="mt-4 text-[16px] font-bold leading-7 text-[#435B80]">
            {"\uB300\uC2DC\uBCF4\uB4DC\uBD80\uD130 \uAE09\uC5EC \uC815\uC0B0\uAE4C\uC9C0, \uAE30\uC5C5 \uC778\uC0AC\uAD00\uB9AC\uC5D0 \uD544\uC694\uD55C \uD575\uC2EC \uAE30\uB2A5\uC744 \uC9C1\uAD00\uC801\uC778 \uD654\uBA74\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4."}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={feature.number}
                type="button"
                aria-pressed={isActive}
                aria-label={`${feature.title} \uAE30\uB2A5 \uBCF4\uAE30`}
                onClick={() => setActiveIndex(index)}
                className={`flex min-h-[220px] cursor-pointer flex-col rounded-[22px] border p-7 text-left transition-all duration-300 ease-out motion-reduce:transition-none ${
                  isActive
                    ? "border-[#2868F6] bg-gradient-to-br from-[#246BFE] to-[#4BABFA] text-white shadow-[0_14px_32px_rgba(36,107,254,0.16)]"
                    : "border-[#D9E7FA] bg-white text-[#102A50] shadow-none"
                }`}
              >
                <span
                  className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[15px] text-[15px] font-bold transition-colors duration-300 ease-out motion-reduce:transition-none ${
                    isActive ? "bg-white/20 text-white" : "bg-[#EAF3FF] text-[#2868F6]"
                  }`}
                >
                  {feature.number}
                </span>
                <span className="mt-6 block text-[20px] font-extrabold leading-[24px] transition-colors duration-300 ease-out motion-reduce:transition-none">
                  {feature.title}
                </span>
                <span
                  className={`mt-3 block text-[14px] font-semibold leading-[22px] transition-colors duration-300 ease-out motion-reduce:transition-none ${
                    isActive ? "text-white/80" : "text-[#435B80]"
                  }`}
                >
                  {feature.summary}
                </span>
              </button>
            );
          })}
        </div>

        <div
          key={activeFeature.number}
          className="mt-10 grid items-stretch gap-5 transition-[opacity,transform] duration-200 ease-out starting:translate-y-1 starting:opacity-0 motion-reduce:transform-none motion-reduce:transition-none lg:grid-cols-2"
        >
          <div className="min-h-[350px] rounded-[24px] border border-[#D9E7FA] bg-white p-6 shadow-[0_18px_45px_rgba(50,94,160,0.08)] sm:p-7">
            <h3 className="text-[24px] font-extrabold text-[#102A50]">
              {activeFeature.previewTitle}
            </h3>
            <div className="mt-5 flex aspect-[667/334] w-full max-w-[620px] items-center justify-center overflow-hidden rounded-[20px] bg-[#F4F8FF]">
              {!imageFailed ? (
                <Image
                  src={activeFeature.previewImage}
                  alt={`${activeFeature.title} \uD654\uBA74 \uBBF8\uB9AC\uBCF4\uAE30`}
                  width={667}
                  height={334}
                  className="h-auto w-full object-contain"
                  onError={() => setFailedImage(activeFeature.previewImage)}
                />
              ) : (
                <p className="px-6 text-center text-[16px] font-bold text-[#6B7F9F]">
                  {`${activeFeature.title} \uD654\uBA74 \uBBF8\uB9AC\uBCF4\uAE30`}
                </p>
              )}
            </div>
          </div>

          <div className="flex min-h-[350px] flex-col rounded-[24px] bg-gradient-to-br from-[#174CB7] via-[#246BFE] to-[#4BABFA] p-6 text-white sm:p-8">
            <h3 className="text-[24px] font-extrabold">{activeFeature.detailTitle}</h3>
            <p className="mt-3 text-[14px] font-semibold leading-[23px] text-white/80">
              {activeFeature.detailDescription}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {activeFeature.detailItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-white/20 bg-white/10 px-4 py-4 text-[15px] font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-1 gap-3 pt-6 sm:grid-cols-3">
              {activeFeature.stats.map((stat) => (
                <div key={stat.label} className="rounded-[14px] bg-[#164BAF]/65 px-4 py-4">
                  <p className="text-[18px] font-extrabold">{stat.value}</p>
                  <p className="mt-2 text-[11px] font-semibold text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
