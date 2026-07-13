import Link from "next/link";

const navigation = [
  { label: "\uC8FC\uC694 \uAE30\uB2A5", href: "#features" },
  { label: "\uC7A5\uC810", href: "#benefits" },
  { label: "\uC694\uAE08\uC81C", href: "#pricing" },
  { label: "\uBB38\uC758", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-[84px] w-full bg-white shadow-[0_1px_0_rgba(16,42,80,0.06)]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 min-[1440px]:px-0">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={"SmartHR \uD648"}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#2563EB] text-xl font-bold text-white">
            S
          </span>
          <span className="text-xl font-bold text-[#102A43]">SmartHR</span>
        </Link>

        <nav
          className="hidden items-center gap-12 md:flex"
          aria-label={"\uC8FC\uC694 \uBA54\uB274"}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-extrabold tracking-[0] text-[#435B80]! transition-colors duration-300 ease-out hover:text-[#2563EB]! motion-reduce:transition-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/login"
          className="flex h-12 w-[104px] items-center justify-center rounded-full bg-[#2563EB] text-base font-semibold text-white! transition-all duration-300 ease-out hover:bg-[#1D4ED8] motion-reduce:transition-none"
        >
          {"\uB85C\uADF8\uC778"}
        </Link>
      </div>
    </header>
  );
}
