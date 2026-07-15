package erp.system.attendance.service;

import erp.system.attendance.dto.AttendanceMonthlySummaryResponse;
import erp.system.attendance.dto.AttendanceResponse;
import erp.system.attendance.entity.Attendance;
import erp.system.attendance.repository.AttendanceRepository;
import erp.system.common.exception.BusinessException;
import erp.system.common.exception.ErrorCode;
import erp.system.employee.entity.Employee;
import erp.system.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final EmployeeRepository employeeRepository;

    public List<AttendanceResponse> getDaily(LocalDate workDate) {
        return attendanceRepository.findAllByWorkDateOrderByEmployee_EmployeeIdAsc(workDate).stream()
                .map(AttendanceResponse::from)
                .toList();
    }

    public List<AttendanceMonthlySummaryResponse> getMonthlySummary(YearMonth yearMonth) {
        LocalDate start = yearMonth.atDay(1);
        LocalDate end = yearMonth.atEndOfMonth();
        return attendanceRepository.summarizeMonthly(start, end);
    }

    @Transactional
    public AttendanceResponse checkIn(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new BusinessException(ErrorCode.EMPLOYEE_NOT_FOUND));

        LocalDateTime now = LocalDateTime.now();
        attendanceRepository.findByEmployee_EmployeeIdAndWorkDate(employeeId, now.toLocalDate())
                .ifPresent(a -> { throw new BusinessException(ErrorCode.ALREADY_CHECKED_IN); });

        Attendance attendance = Attendance.checkIn(employee, now);
        return AttendanceResponse.from(attendanceRepository.save(attendance));
    }

    @Transactional
    public AttendanceResponse checkOut(Long employeeId) {
        LocalDateTime now = LocalDateTime.now();
        Attendance attendance = attendanceRepository.findByEmployee_EmployeeIdAndWorkDate(employeeId, now.toLocalDate())
                .orElseThrow(() -> new BusinessException(ErrorCode.NOT_CHECKED_IN));

        if (attendance.getCheckOutTime() != null) {
            throw new BusinessException(ErrorCode.ALREADY_CHECKED_OUT);
        }

        attendance.checkOut(now);
        return AttendanceResponse.from(attendance);
    }
}
