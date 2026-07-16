"use client";

import { MagnifyingGlassIcon, ArrowPathIcon, ChevronLeftIcon, ChevronRightIcon, PaperClipIcon } from "@heroicons/react/24/outline";

// Temporary mock data for preview.
const mockNotices = [
  { id: 24, type: "중요", typeColor: "bg-yellow-100 text-yellow-700", title: "2026년 하계 휴가 운영 안내", audience: "전체 직원", attach: 1, author: "박성민", startDate: "2026-07-14", endDate: "2026-08-31", status: "게시 중", statusColor: "text-blue-600", views: 186, pinned: true },
  { id: 23, type: "인사", typeColor: "bg-green-100 text-green-700", title: "7월 신규 입사자 안내", audience: "전체 직원", attach: 0, author: "인사관리자", startDate: "2026-07-15", endDate: "2026-07-31", status: "예약 게시", statusColor: "text-emerald-600", views: 0, pinned: false },
  { id: 22, type: "시스템", typeColor: "bg-gray-100 text-gray-700", title: "사내 ERP 정기 점검 안내", audience: "전체 직원", attach: 0, author: "시스템관리자", startDate: "2026-07-12", endDate: "2026-07-20", status: "게시 중", statusColor: "text-blue-600", views: 94, pinned: false },
  { id: 21, type: "일반", typeColor: "bg-gray-100 text-gray-700", title: "사내 교육 일정 안내", audience: "IT본부", attach: 2, author: "박성민", startDate: "-", endDate: "-", status: "임시 저장", statusColor: "text-gray-500", views: "-", pinned: false },
  { id: 20, type: "긴급", typeColor: "bg-red-100 text-red-700", title: "개인정보 보안 수칙 준수 안내", audience: "전체 직원", attach: 1, author: "보안관리자", startDate: "2026-07-01", endDate: "2026-07-10", status: "게시 종료", statusColor: "text-gray-400", views: 312, pinned: false },
];

export default function NoticeList() {
  return (
    <div className="flex flex-col gap-6 min-h-0 flex-1">
      {/* Filter Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">게시 상태</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>전체</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">공지 유형</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>전체</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">공개 대상</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>전체</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">게시 기간</label>
            <input type="text" placeholder="시작일 ~ 종료일" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">제목 또는 작성자</label>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="제목 또는 작성자 검색" className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <ArrowPathIcon className="w-4 h-4" />
            초기화
          </button>
          <button className="flex items-center gap-1.5 px-6 py-2 bg-[#4A5DDF] hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors shadow-sm">
            <MagnifyingGlassIcon className="w-4 h-4" />
            조회
          </button>
        </div>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-xl border border-gray-200 flex flex-col min-h-0 flex-1 shadow-sm">
        <div className="p-5 border-b border-gray-200 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-900">공지사항 목록</h2>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">총 24건</span>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">게시 중 15건</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium">예약 3건</span>
              <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 text-xs font-medium">임시 저장 4건</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">상단 고정</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">고정 해제</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">게시 종료</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">삭제</button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="py-3 px-4 text-center border-b border-gray-200 w-12"><input type="checkbox" className="rounded border-gray-300" /></th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">번호</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">유형</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200">제목</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">공개 대상</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">첨부</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">작성자</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">게시 시작일</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">게시 종료일</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">게시 상태</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">조회수</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">고정</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200 text-center">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockNotices.map((item) => (
                <tr key={item.id} className={`hover:bg-gray-50 transition-colors ${item.pinned ? "bg-orange-50/20" : ""}`}>
                  <td className="py-3 px-4 text-center"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="py-3 px-4 text-sm text-gray-500 text-center">{item.id}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${item.typeColor}`}>{item.type}</span>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900 cursor-pointer hover:underline">{item.title}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 text-center">{item.audience}</td>
                  <td className="py-3 px-4 text-center">
                    {item.attach > 0 ? (
                      <div className="flex items-center justify-center gap-1 text-gray-500">
                        <PaperClipIcon className="w-4 h-4" />
                        <span className="text-xs">{item.attach}</span>
                      </div>
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 text-center">{item.author}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 text-center">{item.startDate}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 text-center">{item.endDate}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.status === "게시 중" ? "bg-blue-500" : item.status === "예약 게시" ? "bg-emerald-500" : item.status === "임시 저장" ? "bg-gray-400" : "bg-gray-300"}`}></div>
                      <span className={`text-sm font-medium ${item.statusColor}`}>{item.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 text-center">{item.views}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={item.pinned ? "text-orange-500" : "text-gray-300 line-through"}>📌</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-center gap-1">
                      {item.status === "게시 중" && (
                        <>
                          <button className="px-2 py-1 border border-gray-200 rounded text-xs text-gray-600 hover:bg-gray-50">수정</button>
                          <button className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs hover:bg-yellow-100">게시 종료</button>
                        </>
                      )}
                      {item.status === "예약 게시" && (
                        <>
                          <button className="px-2 py-1 border border-gray-200 rounded text-xs text-gray-600 hover:bg-gray-50">수정</button>
                          <button className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-gray-200">예약 취소</button>
                        </>
                      )}
                      {item.status === "임시 저장" && (
                        <>
                          <button className="px-2 py-1 border border-gray-200 rounded text-xs text-gray-600 hover:bg-gray-50">수정</button>
                          <button className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs hover:bg-blue-100">게시</button>
                        </>
                      )}
                      {item.status === "게시 종료" && (
                        <>
                          <button className="px-2 py-1 border border-gray-200 rounded text-xs text-gray-600 hover:bg-gray-50">재게시</button>
                          <button className="px-2 py-1 bg-red-50 text-red-600 rounded text-xs hover:bg-red-100">삭제</button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            총 24건 조회 - 0건 선택
          </p>
          <div className="flex gap-1">
            <button disabled className="p-2 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed"><ChevronLeftIcon className="w-4 h-4" /></button>
            <button className="px-3 py-1.5 border border-blue-500 bg-blue-50 rounded-md text-blue-600 font-medium">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50">3</button>
            <button className="p-2 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50"><ChevronRightIcon className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
