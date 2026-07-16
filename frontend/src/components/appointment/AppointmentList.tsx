"use client";

import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function AppointmentList() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 flex flex-col min-h-0 flex-1">
      {/* Header & Filters */}
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-900">발령 내역</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              -
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="직원 검색..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="">발령 유형</option>
              <option value="부서 이동">부서 이동</option>
              <option value="직급 승진">직급 승진</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="">2026년 7월</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 whitespace-nowrap">발령일</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 whitespace-nowrap">대상 직원</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 whitespace-nowrap">발령 유형</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 whitespace-nowrap">변경 전</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 whitespace-nowrap">변경 후</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 whitespace-nowrap">처리자</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 whitespace-nowrap">상태</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 whitespace-nowrap">관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8} className="py-16 text-center">
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <p className="text-base font-medium text-gray-900 mb-1">데이터가 없습니다</p>
                  <p className="text-sm">서버 연동 전이거나 해당하는 발령 내역이 없습니다.</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          총 -건 중 - 표시
        </p>
        <div className="flex gap-1">
          <button disabled className="p-2 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed">
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button disabled className="px-3 py-1.5 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed">
            1
          </button>
          <button disabled className="p-2 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed">
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
