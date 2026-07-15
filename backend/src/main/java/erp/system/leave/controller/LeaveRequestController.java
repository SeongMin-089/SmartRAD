package erp.system.leave.controller;

import erp.system.leave.dto.LeaveRequestCreateRequest;
import erp.system.leave.dto.LeaveRequestResponse;
import erp.system.leave.service.LeaveRequestService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leave-requests")
@RequiredArgsConstructor
public class LeaveRequestController {

    private final LeaveRequestService leaveRequestService;

    @GetMapping
    public List<LeaveRequestResponse> getList(
            @RequestParam(required = false) Long employeeId,
            @RequestParam(required = false) String status
    ) {
        return leaveRequestService.getList(employeeId, status);
    }

    @PostMapping
    public ResponseEntity<LeaveRequestResponse> create(@Valid @RequestBody LeaveRequestCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(leaveRequestService.create(request));
    }

    @PatchMapping("/{id}/approve")
    public LeaveRequestResponse approve(@PathVariable Long id, @AuthenticationPrincipal Long approverId) {
        return leaveRequestService.approve(id, approverId);
    }

    @PatchMapping("/{id}/reject")
    public LeaveRequestResponse reject(@PathVariable Long id, @AuthenticationPrincipal Long approverId) {
        return leaveRequestService.reject(id, approverId);
    }
}
