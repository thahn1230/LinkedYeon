// FindIdPwPage.tsx
import React from 'react';
import './FindIdPwPage.css';
import { useNavigate } from 'react-router-dom';

const FindIdPwPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFindIdPw = () => {
    // ID/PW 찾기 로직
  };

  return (
    <div className="find-id-pw-container">
      <h2>ID/PW 찾기</h2>
      {/* ID/PW 찾기 폼 및 필요한 인풋 필드들을 여기에 추가 */}
      <button onClick={handleFindIdPw} className="find-id-pw-confirm-button">
        확인
      </button>
    </div>
  );
}

export default FindIdPwPage;

export {};