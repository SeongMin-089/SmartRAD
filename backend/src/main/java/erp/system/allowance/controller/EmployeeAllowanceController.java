package erp.system.allowance.controller;

import erp.system.allowance.dto.EmployeeAllowanceCreateRequest;
import erp.system.allowance.dto.EmployeeAllowanceResponse;
import erp.system.allowance.service.EmployeeAllowanceService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee-allowances")
@RequiredArgsConstructor
public class EmployeeAllowanceController {

    private final EmployeeAllowanceService employeeAllowanceService;

    @GetMapping
    public List<EmployeeAllowanceResponse> getByEmployee(@RequestParam Long employeeId) {
        return employeeAllowanceService.getByEmployee(employeeId);
    }

    @PostMapping
    public ResponseEntity<EmployeeAllowanceResponse> create(@Valid @RequestBody EmployeeAllowanceCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(employeeAllowanceService.create(request));
    }
}
