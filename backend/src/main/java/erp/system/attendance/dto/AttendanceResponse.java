package erp.system.attendance.dto;

import erp.system.attendance.entity.Attendance;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record AttendanceResponse(
        Long attendanceId,
        Long employeeId,
        String employeeName,
        LocalDate workDate,
        LocalDateTime checkInTime,
        LocalDateTime checkOutTime,
        Integer workMinutes,
        Integer overtimeMinutes,
        Integer nightWorkMinutes,
        Integer lateMinutes,
        Integer earlyLeaveMinutes,
        String attendanceStatusCode
) {
    public static AttendanceResponse from(Attendance attendance) {
        return new AttendanceResponse(
                attendance.getAttendanceId(),
                attendance.getEmployee().getEmployeeId(),
                attendance.getEmployee().getName(),
                attendance.getWorkDate(),
                attendance.getCheckInTime(),
                attendance.getCheckOutTime(),
                attendance.getWorkMinutes(),
                attendance.getOvertimeMinutes(),
                attendance.getNightWorkMinutes(),
                attendance.getLateMinutes(),
                attendance.getEarlyLeaveMinutes(),
                attendance.getAttendanceStatusCode()
        );
    }
}
