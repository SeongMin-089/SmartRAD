"use client";

import { FormEvent, useState } from "react";

const faqs = [
  {
    question: "\uC9C1\uC6D0 \uC218\uAC00 \uC801\uC5B4\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB098\uC694?",
    answer: "\uB124. \uC18C\uADDC\uBAA8 \uD300\uB3C4 \uC9C1\uC6D0 \uC815\uBCF4, \uADFC\uD0DC, \uD734\uAC00 \uAE30\uB2A5\uC744 \uD544\uC694\uD55C \uBC94\uC704\uBD80\uD130 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  },
  {
    question: "\uAE30\uC874 \uC9C1\uC6D0 \uB370\uC774\uD130\uB97C \uC774\uC804\uD560 \uC218 \uC788\uB098\uC694?",
    answer: "\uAE30\uC874 \uB370\uC774\uD130\uB97C \uD655\uC778\uD55C \uD6C4 \uAC00\uB2A5\uD55C \uD615\uC2DD\uC5D0 \uB9DE\uCDB0 \uC774\uC804 \uBC94\uC704\uB97C \uC548\uB0B4\uD569\uB2C8\uB2E4.",
  },
  {
    question: "\uAE09\uC5EC\uBA85\uC138\uC11C \uBC1C\uC1A1 \uAE30\uB2A5\uB3C4 \uC81C\uACF5\uD558\uB098\uC694?",
    answer: "\uC120\uD0DD\uD55C \uD50C\uB79C\uACFC \uB3C4\uC785 \uBC94\uC704\uC5D0 \uB530\uB77C \uAE09\uC5EC \uC815\uC0B0 \uBC0F \uBA85\uC138\uC11C \uBC1C\uC1A1 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert("\uC0C1\uB2F4 \uC2E0\uCCAD\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  };

  return (
    <section id="contact" className="w-full bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_100%)] py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 min-[1440px]:px-0 lg:grid-cols-2">
        <div className="flex min-h-[680px] flex-col rounded-[28px] bg-gradient-to-br from-[#17458F] via-[#1E55C7] to-[#246BFE] p-7 text-white sm:p-10">
          <div className="inline-flex h-[38px] w-fit items-center gap-2 rounded-full bg-white px-[14px] text-[13px] font-bold text-[#1E5BC6]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDF9F3]"><span className="h-2 w-2 rounded-full bg-[#32C9A5]" /></span>
            <span>{"\uBB38\uC758"}</span>
          </div>
          <h2 className="mt-6 text-[38px] font-extrabold leading-[1.5] tracking-[-3px] sm:text-[46px]">
            <span className="block">{"\uC6B0\uB9AC \uD68C\uC0AC\uC5D0 \uB9DE\uB294"}</span>
            <span className="block">{"\uC778\uC0AC\uAD00\uB9AC ERP\uB97C"}</span>
            <span className="block">{"\uC0C1\uB2F4\uD574\uBCF4\uC138\uC694"}</span>
          </h2>
          <p className="mt-4 max-w-[520px] text-[17px] font-semibold leading-8 text-white/70">{"\uB3C4\uC785 \uADDC\uBAA8, \uD544\uC694\uD55C \uAE30\uB2A5, \uC6B4\uC601 \uBC29\uC2DD\uC5D0 \uB9DE\uCDB0 SmartHR \uD65C\uC6A9 \uBC29\uBC95\uACFC \uACAC\uC801\uC744 \uBE60\uB974\uAC8C \uC548\uB0B4\uD569\uB2C8\uB2E4."}</p>
          <div className="mt-8 space-y-3">
            {["\uB3C4\uC785 \uBB38\uC758 \uBC0F \uACAC\uC801 \u00B7 \uBE60\uB978 \uC138\uC77C\uC988 \uC0C1\uB2F4 \uC5F0\uACB0", "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38 \u00B7 \uACE0\uAC1D\uC774 \uAC00\uC7A5 \uAD81\uAE08\uD574\uD558\uB294 \uC9C8\uBB38 \uBAA8\uC74C", "\uACE0\uAC1D \uC13C\uD130 \u00B7 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAC00\uC774\uB4DC \uBC0F \uD5EC\uD504\uB370\uC2A4\uD06C"].map((item) => <p key={item} className="rounded-[14px] border border-white/20 bg-white/10 px-4 py-4 text-[14px] font-bold text-white/85">{item}</p>)}
          </div>
          <span className="mt-auto w-fit rounded-full border border-white/20 bg-white/10 px-4 py-3 text-[13px] font-bold">{"\uD3C9\uC77C 09:00 - 18:00 \uC0C1\uB2F4 \uAC00\uB2A5"}</span>
        </div>

        <form onSubmit={handleSubmit} className="flex min-h-[680px] flex-col rounded-[28px] border border-[#D9E7FA] bg-white p-7 shadow-[0_18px_45px_rgba(50,94,160,0.08)] sm:p-10">
          <h2 className="text-[25px] font-extrabold text-[#102A50]">{"\uB3C4\uC785 \uBB38\uC758 \uBC0F \uACAC\uC801"}</h2>
          <p className="mt-4 text-[15px] font-bold text-[#435B80]">{"\uD68C\uC0AC \uADDC\uBAA8\uC640 \uD544\uC694\uD55C \uAE30\uB2A5\uC744 \uAE30\uC900\uC73C\uB85C \uBE60\uB978 \uC0C1\uB2F4\uC744 \uC5F0\uACB0\uD569\uB2C8\uB2E4."}</p>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[{ name: "name", label: "\uB2F4\uB2F9\uC790 \uC774\uB984", type: "text" }, { name: "company", label: "\uD68C\uC0AC\uBA85", type: "text" }, { name: "email", label: "\uD68C\uC0AC \uC774\uBA54\uC77C", type: "email" }, { name: "phone", label: "\uC5F0\uB77D\uCC98", type: "tel" }].map((field) => (
              <input key={field.name} name={field.name} type={field.type} required aria-label={field.label} placeholder={field.label} className="h-[58px] rounded-[14px] border border-[#D5E4FA] bg-[#F4F8FF] px-4 text-[14px] font-semibold text-[#102A50] outline-none transition-[color,background-color,border-color,box-shadow] duration-300 ease-out placeholder:text-[#7890B3] focus:border-[#2868F6] focus:bg-white focus:ring-4 focus:ring-[#2868F6]/10 motion-reduce:transition-none" />
            ))}
          </div>
          <textarea required name="message" aria-label="\uBB38\uC758 \uB0B4\uC6A9" placeholder="\uB3C4\uC785 \uBAA9\uC801\uC774\uB098 \uAD81\uAE08\uD55C \uB0B4\uC6A9\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694" className="mt-12 min-h-[204px] resize-none rounded-[14px] border border-[#D5E4FA] bg-[#F4F8FF] p-4 text-[14px] font-semibold text-[#102A50] outline-none transition-[color,background-color,border-color,box-shadow] duration-300 ease-out placeholder:text-[#7890B3] focus:border-[#2868F6] focus:bg-white focus:ring-4 focus:ring-[#2868F6]/10 motion-reduce:transition-none" />
          <button type="submit" className="mt-auto h-[58px] cursor-pointer rounded-[14px] bg-gradient-to-r from-[#246BFE] to-[#6AACF8] text-[15px] font-extrabold text-white transition-all duration-300 ease-out hover:shadow-[0_10px_24px_rgba(36,107,254,0.22)] hover:brightness-95 motion-reduce:transition-none">{"\uC0C1\uB2F4 \uC2E0\uCCAD\uD558\uAE30"}</button>
        </form>

        <div className="rounded-[28px] border border-[#D9E7FA] bg-white p-7 shadow-[0_18px_45px_rgba(50,94,160,0.06)] sm:p-8">
          <h2 className="text-[24px] font-extrabold text-[#102A50]">{"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"}</h2>
          <p className="mt-3 text-[14px] font-bold text-[#435B80]">{"\uB3C4\uC785 \uC804 \uACE0\uAC1D\uB4E4\uC774 \uAC00\uC7A5 \uB9CE\uC774 \uD655\uC778\uD558\uB294 \uD56D\uBAA9\uC744 \uD55C\uB208\uC5D0 \uC815\uB9AC\uD588\uC2B5\uB2C8\uB2E4."}</p>
          <div className="mt-6 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className={`overflow-hidden rounded-[14px] border transition-colors duration-300 ease-out motion-reduce:transition-none ${isOpen ? "border-[#BFD5F5] bg-white" : "border-[#D5E4FA] bg-[#F4F8FF]"}`}>
                  <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left text-[14px] font-bold text-[#29496F] transition-colors duration-300 ease-out hover:bg-white/60 motion-reduce:transition-none">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className={`text-[18px] transition-transform duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none ${isOpen ? "rotate-45" : "rotate-0"}`}>+</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="border-t border-[#D5E4FA] px-4 py-4 text-[13px] font-semibold leading-6 text-[#5C7395]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#D9E7FA] bg-white p-7 shadow-[0_18px_45px_rgba(50,94,160,0.06)] sm:p-8">
          <h2 className="text-[24px] font-extrabold text-[#102A50]">{"\uACE0\uAC1D \uC13C\uD130"}</h2>
          <p className="mt-3 text-[14px] font-bold leading-6 text-[#435B80]">{"\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAC00\uC774\uB4DC\uC640 \uD5EC\uD504\uB370\uC2A4\uD06C\uB97C \uD1B5\uD574 \uB3C4\uC785 \uC774\uD6C4\uC5D0\uB3C4 \uC548\uC815\uC801\uC73C\uB85C \uC6B4\uC601\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}</p>
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-[16px] border border-[#D5E4FA] bg-[#F4F8FF] p-5"><h3 className="text-[15px] font-extrabold text-[#102A50]">{"\uC774\uC6A9 \uAC00\uC774\uB4DC"}</h3><p className="mt-2 text-[12px] font-semibold leading-5 text-[#435B80]">{"\uAD00\uB9AC\uC790 \uC124\uC815, \uC9C1\uC6D0 \uB4F1\uB85D, \uADFC\uD0DC \uAD00\uB9AC \uBC29\uBC95 \uC548\uB0B4"}</p></div>
            <div className="rounded-[16px] border border-[#D5E4FA] bg-[#F4F8FF] p-5"><h3 className="text-[15px] font-extrabold text-[#102A50]">{"\uD5EC\uD504\uB370\uC2A4\uD06C"}</h3><p className="mt-2 text-[12px] font-semibold leading-5 text-[#435B80]">{"\uB3C4\uC785, \uACB0\uC81C, \uAE30\uB2A5 \uBB38\uC758\uB97C \uBE60\uB974\uAC8C \uC811\uC218"}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
