import React from 'react';
import './MyPage.css';
import { useAuth } from '../function/AuthContext';

const MyPage: React.FC = () => {
  const { isLoggedIn } = useAuth();  // 로그인 상태를 가져옴

  if (!isLoggedIn) {
    
   // alert("로그인하고 이용해 주세요.");
    
  }

  return (
    <div className="my-page-container">
      <div className="user-info-section">
        <h2>본인 정보</h2>        
        {/* 여기에 본인 정보 확인 및 수정 UI */}
      </div>

      <div className="ideal-type-section">
        <h2>이상형 정보</h2>
        {/* 여기에 이상형 정보 확인 및 수정 UI */}
      </div>
    </div>
  );
}

export default MyPage;
