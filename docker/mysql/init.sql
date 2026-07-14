-- =============================================
-- SmartRAD 테스트용 초기 데이터
-- docker-compose up 시 자동으로 실행됩니다.
-- 비밀번호는 모두 'password123' 입니다.
-- BCrypt 인코딩 값 사용
-- =============================================

USE tp_hr;

-- employee 테이블이 없으면 생성 (JPA가 먼저 생성하므로 보통은 이미 존재)
-- 없을 경우를 대비해 INSERT IGNORE 또는 ON DUPLICATE KEY 사용

INSERT IGNORE INTO employee (
    employee_no,
    name,
    birth_date,
    phone,
    email,
    address,
    hire_date,
    employee_status_code,
    password,
    active,
    deleted
) VALUES
-- 관리자 계정 (사번: ADMIN001)
(
    'ADMIN001',
    '관리자',
    '1985-01-15',
    '010-1234-5678',
    'admin@smartrad.com',
    '서울시 강남구',
    '2020-01-01',
    'ACTIVE',
    '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
    true,
    false
),
-- 일반 직원 계정 (사번: EMP001)
(
    'EMP001',
    '홍길동',
    '1990-05-20',
    '010-2345-6789',
    'hong@smartrad.com',
    '서울시 마포구',
    '2022-03-15',
    'ACTIVE',
    '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
    true,
    false
),
-- 일반 직원 계정 (사번: EMP002)
(
    'EMP002',
    '김철수',
    '1992-08-30',
    '010-3456-7890',
    'kim@smartrad.com',
    '서울시 서초구',
    '2023-01-10',
    'ACTIVE',
    '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
    true,
    false
);
