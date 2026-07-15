package erp.system.allowance.controller;

import erp.system.allowance.dto.AllowanceCreateRequest;
import erp.system.allowance.dto.AllowanceResponse;
import erp.system.allowance.service.AllowanceService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/allowances")
@RequiredArgsConstructor
public class AllowanceController {

    private final AllowanceService allowanceService;

    @GetMapping
    public List<AllowanceResponse> getAll() {
        return allowanceService.getAll();
    }

    @PostMapping
    public ResponseEntity<AllowanceResponse> create(@Valid @RequestBody AllowanceCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(allowanceService.create(request));
    }
}
