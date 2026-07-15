package erp.system.appointment.service;

import erp.system.appointment.dto.EmployeeAppointmentCreateRequest;
import erp.system.appointment.dto.EmployeeAppointmentResponse;
import erp.system.appointment.entity.EmployeeAppointment;
import erp.system.appointment.repository.EmployeeAppointmentRepository;
import erp.system.common.exception.BusinessException;
import erp.system.common.exception.ErrorCode;
import erp.system.department.entity.Department;
import erp.system.department.repository.DepartmentRepository;
import erp.system.employee.entity.Employee;
import erp.system.employee.repository.EmployeeRepository;
import erp.system.position.entity.Position;
import erp.system.position.repository.PositionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class EmployeeAppointmentService {

    private final EmployeeAppointmentRepository employeeAppointmentRepository;
    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;
    private final PositionRepository positionRepository;

    public List<EmployeeAppointmentResponse> getByEmployee(Long employeeId) {
        return employeeAppointmentRepository.findAllByEmployee_EmployeeIdOrderByEffectiveDateDesc(employeeId).stream()
                .map(EmployeeAppointmentResponse::from)
                .toList();
    }

    @Transactional
    public EmployeeAppointmentResponse create(EmployeeAppointmentCreateRequest request) {
        Employee employee = employeeRepository.findById(request.employeeId())
                .orElseThrow(() -> new BusinessException(ErrorCode.EMPLOYEE_NOT_FOUND));

        Department fromDepartment = employee.getDepartment();
        Position fromPosition = employee.getPosition();

        Department toDepartment = request.toDepartmentId() != null
                ? departmentRepository.findById(request.toDepartmentId())
                        .orElseThrow(() -> new BusinessException(ErrorCode.DEPARTMENT_NOT_FOUND))
                : fromDepartment;

        Position toPosition = request.toPositionId() != null
                ? positionRepository.findById(request.toPositionId())
                        .orElseThrow(() -> new BusinessException(ErrorCode.POSITION_NOT_FOUND))
                : fromPosition;

        String fromJobTitle = employeeAppointmentRepository
                .findFirstByEmployee_EmployeeIdOrderByEffectiveDateDescEmployeeAppointmentIdDesc(employee.getEmployeeId())
                .map(EmployeeAppointment::getToJobTitle)
                .orElse(null);

        EmployeeAppointment appointment = EmployeeAppointment.builder()
                .employee(employee)
                .appointmentType(request.appointmentType())
                .appointmentDate(request.appointmentDate())
                .effectiveDate(request.effectiveDate())
                .fromDepartment(fromDepartment)
                .toDepartment(toDepartment)
                .fromPositionName(fromPosition != null ? fromPosition.getPositionName() : null)
                .toPositionName(toPosition != null ? toPosition.getPositionName() : null)
                .fromJobTitle(fromJobTitle)
                .toJobTitle(request.toJobTitle())
                .reason(request.reason())
                .memo(request.memo())
                .build();

        employeeAppointmentRepository.save(appointment);

        employee.applyAppointment(toDepartment, toPosition);
        if (EmployeeAppointment.TYPE_RESIGNATION.equals(request.appointmentType())) {
            employee.resign(request.effectiveDate());
        }

        return EmployeeAppointmentResponse.from(appointment);
    }
}
