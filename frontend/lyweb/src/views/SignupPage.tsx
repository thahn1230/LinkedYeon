// SignupPage.tsx
import React, { useState } from 'react';
import './SignupPage.css';
import { useNavigate } from 'react-router-dom';


const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState({
    // 본인 정보
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
    age: '',
    gender: '',

    // 이상형 정보
    location: '',
    character: '',
    agePreference: ''
  });

  const handleNextPage = () => {
    if (page < 4) setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(prevPage => prevPage - 1);
  };

  const handleSignup = () => {
    // 회원가입 로직
  };



  return (
    <div className="signup-container">
      {page === 1 && (
        <>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 확인" />
        </>
      )}
      {page === 2 && (
        <>
          <input type="text" placeholder="이름" />
          <input type="number" placeholder="나이" />
          <select>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </>
      )}
      {page === 3 && (
        <>
          <input type="text" placeholder="지역" />
          <input type="text" placeholder="성격" />
        </>
      )}
      {page === 4 && (
        <>
          <input type="number" placeholder="이상형 나이" />
          <button onClick={() => alert('회원가입 완료')}>확인</button>
        </>
      )}
      <div className="pagination-buttons">
        {<button onClick={handlePrevPage}>이전</button>}
        {<button onClick={handleNextPage}>다음</button>}
        <button onClick={handleSignup}>확인</button>
      </div>
    </div>
  );
}

export default SignupPage;

export {};