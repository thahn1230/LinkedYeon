# FRONT END 변경 (예정)이력

## VER 0.02
- **Main Updates**:
  - Header, Footer, MainPage, LoginPage 생성
- **Details**:
  - Header
  - Footer
  - MainPage
  - LoginPage

## VER 0.03
- **Main Updates**:
  - 회원가입 관련 페이지 생성
- **Details**:
  - SignupPage
- **Additional Updates**:
  - 공지사항 관련 페이지 생성
    - NoticePage

## VER 0.04 (8/20)
- **Main Updates**:
  - 로그인 관련 함수 수정
- **Details**:
  - 로그인 로직 수정:
    - 로그인 상태 관련 함수 수정 (JWT Token): 
      - AuthContextType
      - api: loginUser
  - 로그인 여부 확인:
    - 로그인 여부에 따른 페이지 확인 함수 생성:
      - PrivateRoute

## VER 0.05 (진행중...)
- **Main Updates**:
  - 로그인, 로그아웃 시 로컬에 토큰을 저장하거나 제거하는 로직 제거
    로그인, 로그아웃 시 쿠키를 포함해서 요청을 전송하는 로직추가
  - 회원가입 로직 및 UI 수정
- **Details**:
  - 회원가입 로직 수정:
    - 회원가입 관련 페이지 제작
      - 메인 회원가입 페이지에 페이지 마다 관련 된 페이지를 만들고 확인 버튼 클릭 시 모든 데이터를 한번에 백엔드로 보내는 로직 추가 
    //회원가입 시 해당 컬럼 자료형에 따른 검증 로직 추가
  - 회원가입 UI 수정:
    - 테이블 명세서에 첨부한 컬럼 참고해서 회원가입 시 필요한 데이터 셋 활용한 UI 제작 중
    - 회원가입 시 필요한 질문 관련 페이지들 제작
