package erp.system.appointment.dto;

import erp.system.appointment.entity.EmployeeAppointment;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record EmployeeAppointmentResponse(
        Long employeeAppointmentId,
        Long employeeId,
        String employeeName,
        String appointmentType,
        LocalDate appointmentDate,
        LocalDate effectiveDate,
        Long fromDepartmentId,
        String fromDepartmentName,
        Long toDepartmentId,
        String toDepartmentName,
        String fromPositionName,
        String toPositionName,
        String fromJobTitle,
        String toJobTitle,
        String reason,
        String memo,
        LocalDateTime createdAt
) {
    public static EmployeeAppointmentResponse from(EmployeeAppointment appointment) {
        return new EmployeeAppointmentResponse(
                appointment.getEmployeeAppointmentId(),
                appointment.getEmployee().getEmployeeId(),
                appointment.getEmployee().getName(),
                appointment.getAppointmentType(),
                appointment.getAppointmentDate(),
                appointment.getEffectiveDate(),
                appointment.getFromDepartment() != null ? appointment.getFromDepartment().getDepartmentId() : null,
                appointment.getFromDepartment() != null ? appointment.getFromDepartment().getDepartmentName() : null,
                appointment.getToDepartment() != null ? appointment.getToDepartment().getDepartmentId() : null,
                appointment.getToDepartment() != null ? appointment.getToDepartment().getDepartmentName() : null,
                appointment.getFromPositionName(),
                appointment.getToPositionName(),
                appointment.getFromJobTitle(),
                appointment.getToJobTitle(),
                appointment.getReason(),
                appointment.getMemo(),
                appointment.getCreatedAt()
        );
    }
}
