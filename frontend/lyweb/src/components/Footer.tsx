// components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <button onClick={() => window.location.href='/matching'}>매칭 현황</button>
      <button onClick={() => window.location.href='/notice'}>공지사항</button>
      <button onClick={() => window.location.href='/mypage'}>마이페이지</button>
    </footer>
  );
}

export default Footer;
