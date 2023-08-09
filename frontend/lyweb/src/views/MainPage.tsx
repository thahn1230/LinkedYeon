// views/MainPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MainPage.css';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">      
      <div className="content">
        <p>환영합니다.</p>
        <button onClick={() => window.location.href='/apply-dating'}>소개팅 신청하기</button>
        <button onClick={() => window.location.href='/apply-meeting'}>미팅 신청하기</button>
      </div>      
    </div>
  );
}

export default MainPage;
