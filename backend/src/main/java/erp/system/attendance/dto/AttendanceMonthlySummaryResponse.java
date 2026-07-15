package erp.system.attendance.dto;

public record AttendanceMonthlySummaryResponse(
        Long employeeId,
        String employeeName,
        Long totalWorkMinutes,
        Long totalOvertimeMinutes,
        Long workDayCount
) {
}
