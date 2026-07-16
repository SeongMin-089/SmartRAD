"use client";

import AppointmentStats from "@/components/appointment/AppointmentStats";
import AppointmentList from "@/components/appointment/AppointmentList";

export default function AppointmentsPage() {
  return (
    <div className="max-w-[1600px] mx-auto h-[calc(100vh-100px)] flex flex-col p-6">
      <AppointmentStats />
      <AppointmentList />
    </div>
  );
}
