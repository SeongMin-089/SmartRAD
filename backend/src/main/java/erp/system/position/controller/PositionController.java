package erp.system.position.controller;

import erp.system.position.dto.PositionCreateRequest;
import erp.system.position.dto.PositionResponse;
import erp.system.position.service.PositionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/positions")
@RequiredArgsConstructor
public class PositionController {

    private final PositionService positionService;

    @GetMapping
    public List<PositionResponse> getAll() {
        return positionService.getAll();
    }

    @PostMapping
    public ResponseEntity<PositionResponse> create(@Valid @RequestBody PositionCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(positionService.create(request));
    }
}
