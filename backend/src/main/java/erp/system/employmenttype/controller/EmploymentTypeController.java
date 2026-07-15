package erp.system.employmenttype.controller;

import erp.system.employmenttype.dto.EmploymentTypeCreateRequest;
import erp.system.employmenttype.dto.EmploymentTypeResponse;
import erp.system.employmenttype.service.EmploymentTypeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employment-types")
@RequiredArgsConstructor
public class EmploymentTypeController {

    private final EmploymentTypeService employmentTypeService;

    @GetMapping
    public List<EmploymentTypeResponse> getAll() {
        return employmentTypeService.getAll();
    }

    @PostMapping
    public ResponseEntity<EmploymentTypeResponse> create(@Valid @RequestBody EmploymentTypeCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(employmentTypeService.create(request));
    }
}
