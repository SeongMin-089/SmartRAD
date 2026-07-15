package erp.system.appointment.controller;

import erp.system.appointment.dto.EmployeeAppointmentCreateRequest;
import erp.system.appointment.dto.EmployeeAppointmentResponse;
import erp.system.appointment.service.EmployeeAppointmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
public class EmployeeAppointmentController {

    private final EmployeeAppointmentService employeeAppointmentService;

    @GetMapping
    public List<EmployeeAppointmentResponse> getByEmployee(@RequestParam Long employeeId) {
        return employeeAppointmentService.getByEmployee(employeeId);
    }

    @PostMapping
    public ResponseEntity<EmployeeAppointmentResponse> create(@Valid @RequestBody EmployeeAppointmentCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(employeeAppointmentService.create(request));
    }
}
