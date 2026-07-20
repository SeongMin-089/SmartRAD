"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8081/api";

interface ErrorResponse {
  code: string;
  message: string;
}

const inputClasses =
  "w-full rounded-xl border border-brand-border-light bg-brand-soft px-4 py-3 text-sm text-brand-navy placeholder:text-brand-muted outline-none transition-colors focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/20";
const labelClasses = "mb-1.5 block text-sm font-medium text-brand-text";

export default function FindPasswordPage() {
  const [employeeNo, setEmployeeNo] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!employeeNo || !email || !birthDate || !newPassword) {
      setError("모든 항목을 입력해주세요.");
      return;
    }
    if (newPassword.length < 4) {
      setError("비밀번호는 4자 이상이어야 합니다.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employeeNo, email, birthDate, newPassword }),
      });

      if (!res.ok) {
        const body: ErrorResponse = await res.json();
        throw new Error(body.message || "비밀번호 재설정에 실패했습니다.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "비밀번호 재설정 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-brand-soft px-6 py-14">
      <div className="w-full max-w-[420px]">
        <Link href="/login" className="mb-6 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary">
            <Logo className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-brand-navy">SmartHR</span>
        </Link>

        <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-[0_8px_30px_rgb(15,23,42,0.06)] sm:p-10">
          <h2 className="text-2xl font-bold text-brand-navy">비밀번호 찾기</h2>
          <p className="mt-1.5 text-sm text-brand-muted">
            사번, 이메일, 생년월일로 본인 확인 후 새 비밀번호를 설정합니다.
          </p>

          {success ? (
            <div className="mt-7 space-y-5">
              <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                비밀번호가 재설정되었습니다. 새 비밀번호로 로그인해주세요.
              </p>
              <Link
                href="/login"
                className="flex items-center justify-center rounded-xl bg-brand-primary py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-dark"
              >
                로그인하러 가기
              </Link>
            </div>
          ) : (
            <form className="mt-7 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="employeeNo" className={labelClasses}>사번</label>
                <input
                  id="employeeNo"
                  value={employeeNo}
                  onChange={(e) => setEmployeeNo(e.target.value)}
                  placeholder="예: E2026001"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>이메일</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="가입 시 등록한 이메일"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="birthDate" className={labelClasses}>생년월일</label>
                <input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="newPassword" className={labelClasses}>새 비밀번호</label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="4자 이상 입력하세요"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className={labelClasses}>새 비밀번호 확인</label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="새 비밀번호를 한 번 더 입력하세요"
                  className={inputClasses}
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-500">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 flex items-center justify-center rounded-xl bg-brand-primary py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "처리 중..." : "비밀번호 재설정"}
              </button>

              <Link href="/login" className="text-center text-sm font-medium text-brand-muted hover:text-brand-primary">
                로그인으로 돌아가기
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
