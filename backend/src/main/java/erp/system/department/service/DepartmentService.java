package erp.system.department.service;

import erp.system.common.exception.BusinessException;
import erp.system.common.exception.ErrorCode;
import erp.system.department.dto.DepartmentCreateRequest;
import erp.system.department.dto.DepartmentResponse;
import erp.system.department.entity.Department;
import erp.system.department.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public List<DepartmentResponse> getAll() {
        return departmentRepository.findAll().stream()
                .map(DepartmentResponse::from)
                .toList();
    }

    @Transactional
    public DepartmentResponse create(DepartmentCreateRequest request) {
        Department parent = resolveParent(request.parentDepartmentId());

        Department department = Department.builder()
                .departmentName(request.departmentName())
                .parentDepartment(parent)
                .build();

        return DepartmentResponse.from(departmentRepository.save(department));
    }

    private Department resolveParent(Long parentDepartmentId) {
        if (parentDepartmentId == null) {
            return null;
        }
        return departmentRepository.findById(parentDepartmentId)
                .orElseThrow(() -> new BusinessException(ErrorCode.DEPARTMENT_NOT_FOUND));
    }
}
