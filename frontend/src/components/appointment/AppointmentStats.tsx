"use client";

import { ArrowsRightLeftIcon, BuildingOffice2Icon, ArrowTrendingUpIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function AppointmentStats() {
  const cards = [
    {
      label: "이번달 총 발령",
      value: "-",
      icon: ArrowsRightLeftIcon,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "부서 이동",
      value: "-",
      icon: BuildingOffice2Icon,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      label: "직급 승진",
      value: "-",
      icon: ArrowTrendingUpIcon,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      label: "처리 대기",
      value: "-",
      icon: ClockIcon,
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
