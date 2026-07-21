"use client";

import { useEffect, useState } from "react";
import { UserIcon, BuildingOfficeIcon, BriefcaseIcon, IdentificationIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { getEmployeeStatusLabel, getEmployeeStatusBadgeClasses } from "@/lib/employeeStatus";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8081/api";

function authHeaders(): HeadersInit {
  const token = window.localStorage.getItem("accessToken") ?? window.sessionStorage.getItem("accessToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

interface EmployeeDetailData {
  employeeId: number;
  employeeNo: string;
  name: string;
  email: string;
  phone: string;
  address: string | null;
  hireDate: string;
  employeeStatusCode: string;
  departmentId: number | null;
  departmentName: string;
  positionId: number | null;
  positionName: string;
  employmentTypeId: number | null;
  employmentTypeName: string;
  managerId: number | null;
  managerName: string | null;
  profileImage: string | null;
}

interface AppointmentResponse {
  appointmentId: number;
  employeeId: number;
  employeeName: string;
  appointmentType: string;
  appointmentDate: string;
  beforeDepartmentName: string | null;
  afterDepartmentName: string | null;
  beforePositionName: string | null;
  afterPositionName: string | null;
  beforeEmploymentTypeName: string | null;
  afterEmploymentTypeName: string | null;
  reason: string;
}

function formatTenure(hireDate: string | null) {
  if (!hireDate) return "-";
  const hire = new Date(hireDate);
  if (Number.isNaN(hire.getTime())) return "-";

  const now = new Date();
  let years = now.getFullYear() - hire.getFullYear();
  let months = now.getMonth() - hire.getMonth();
  if (now.getDate() < hire.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (years < 0) return "-";

  return `${years}년 ${months}개월`;
}

export default function MyProfile() {
  const [profile, setProfile] = useState<EmployeeDetailData | null>(null);
  const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const employeeId = window.localStorage.getItem("employeeId") ?? window.sessionStorage.getItem("employeeId");
    if (employeeId) {
      fetchData(employeeId);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchData = async (employeeId: string) => {
    setLoading(true);
    try {
      const [profileRes, appointmentsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/employees/${employeeId}`, { headers: authHeaders() }),
        fetch(`${API_BASE_URL}/appointments/me`, { headers: authHeaders() }),
      ]);

      if (profileRes.ok) {
        setProfile(await profileRes.json());
      }
      if (appointmentsRes.ok) {
        setAppointments(await appointmentsRes.json());
      }
    } catch (error) {
      console.error("Failed to fetch my profile data", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex-1 flex items-center justify-center text-gray-500">
        데이터를 불러오는 중입니다...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex-1 flex items-center justify-center text-gray-500">
        프로필 정보를 찾을 수 없습니다. 다시 로그인해 주세요.
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full min-h-0">
      {/* Left: Basic Info */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 min-h-0">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex flex-col items-center mb-6">
            {profile.profileImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.profileImage} alt={`${profile.name} 프로필 사진`} className="w-24 h-24 rounded-full object-cover shadow-md mb-4 border-2 border-white ring-2 ring-blue-100" />
            ) : (
              <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center text-4xl font-bold shadow-md mb-4 border-2 border-white ring-2 ring-blue-100">
                {profile.name ? profile.name.charAt(0) : '?'}
              </div>
            )}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{profile.name}</h2>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white border ${getEmployeeStatusBadgeClasses(profile.employeeStatusCode)} before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full shadow-sm`}>
              {getEmployeeStatusLabel(profile.employeeStatusCode)}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <BuildingOfficeIcon className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-medium">소속 부서</p>
                <p className="text-sm font-semibold text-gray-900">{profile.departmentName || '-'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <BriefcaseIcon className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-medium">직급 및 고용형태</p>
                <p className="text-sm font-semibold text-gray-900">{profile.positionName || '-'} · {profile.employmentTypeName || '-'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <IdentificationIcon className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-medium">사원 번호</p>
                <p className="text-sm font-semibold text-gray-900">{profile.employeeNo || '-'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex-1">
          <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">개인 연락처 정보</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <EnvelopeIcon className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 font-medium">이메일</p>
                <p className="text-sm text-gray-900 mt-0.5">{profile.email || '-'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 font-medium">연락처</p>
                <p className="text-sm text-gray-900 mt-0.5">{profile.phone || '-'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <UserIcon className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 font-medium">입사일 (근속 기간)</p>
                <p className="text-sm text-gray-900 mt-0.5">
                  {profile.hireDate ? profile.hireDate.substring(0, 10) : '-'} <span className="text-blue-600 font-medium ml-1">({formatTenure(profile.hireDate)})</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Appointment History */}
      <div className="w-full lg:w-2/3 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col min-h-0 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-blue-600" />
            내 인사 발령 이력
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto p-6 relative">
          {appointments.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-500 text-sm">
              인사 발령 이력이 없습니다.
            </div>
          ) : (
            <div className="relative border-l-2 border-blue-100 ml-4 space-y-8 pb-8">
              {appointments.sort((a, b) => new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime()).map((app, idx) => (
                <div key={app.appointmentId} className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-blue-600">{app.appointmentDate}</span>
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-semibold">{app.appointmentType}</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-lg p-4 mt-2 shadow-sm">
                    {app.appointmentType === "부서이동" && (
                      <p className="text-sm text-gray-700">부서 변경: <span className="line-through text-gray-400">{app.beforeDepartmentName || '-'}</span> <span className="text-blue-500 font-bold ml-1">→ {app.afterDepartmentName}</span></p>
                    )}
                    {app.appointmentType === "승진" && (
                      <p className="text-sm text-gray-700">직급 변경: <span className="line-through text-gray-400">{app.beforePositionName || '-'}</span> <span className="text-blue-500 font-bold ml-1">→ {app.afterPositionName}</span></p>
                    )}
                    {(app.appointmentType === "입사" || app.appointmentType === "기타") && (
                      <p className="text-sm text-gray-700">
                        소속: <strong>{app.afterDepartmentName}</strong>, 직급: <strong>{app.afterPositionName}</strong>
                      </p>
                    )}
                    {app.reason && (
                      <p className="text-xs text-gray-500 mt-2 p-2 bg-gray-50 rounded italic border-l-2 border-gray-200">
                        사유: {app.reason}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
