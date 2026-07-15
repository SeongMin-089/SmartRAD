package erp.system.appointment.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public record EmployeeAppointmentCreateRequest(
        @NotNull(message = "사원은 필수입니다.") Long employeeId,
        @NotBlank(message = "발령 유형은 필수입니다.") String appointmentType,
        @NotNull(message = "발령일은 필수입니다.") LocalDate appointmentDate,
        @NotNull(message = "발효일은 필수입니다.") LocalDate effectiveDate,
        Long toDepartmentId,
        Long toPositionId,
        @Size(max = 100) String toJobTitle,
        @Size(max = 500) String reason,
        @Size(max = 1000) String memo
) {
}
