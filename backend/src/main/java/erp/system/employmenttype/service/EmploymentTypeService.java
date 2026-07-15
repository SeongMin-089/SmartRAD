package erp.system.employmenttype.service;

import erp.system.employmenttype.dto.EmploymentTypeCreateRequest;
import erp.system.employmenttype.dto.EmploymentTypeResponse;
import erp.system.employmenttype.entity.EmploymentType;
import erp.system.employmenttype.repository.EmploymentTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class EmploymentTypeService {

    private final EmploymentTypeRepository employmentTypeRepository;

    public List<EmploymentTypeResponse> getAll() {
        return employmentTypeRepository.findAll().stream()
                .map(EmploymentTypeResponse::from)
                .toList();
    }

    @Transactional
    public EmploymentTypeResponse create(EmploymentTypeCreateRequest request) {
        EmploymentType employmentType = EmploymentType.builder()
                .employmentTypeName(request.employmentTypeName())
                .build();

        return EmploymentTypeResponse.from(employmentTypeRepository.save(employmentType));
    }
}
