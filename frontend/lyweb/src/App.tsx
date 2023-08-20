// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // 라우터 추가 (nav)
import { AuthProvider } from './function/AuthContext';  // 로그인 상태 관리
import Header from './components/Header';
import MainPage from './views/MainPage';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import FindIdPwPage from './views/FindIdPwPage';
import MyPage from './views/MyPage';
import NoticePage from './views/NoticePage';
import Footer from './components/Footer';  // Footer 컴포넌트도 import 해주세요.

const App: React.FC = () => {
  return (
    <AuthProvider>      {/* 로그인 상태관리 */}
    <Router>             {/* 라우터 추가 */}
      <Header />         {/* 상단바 */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/FindIdPw" element={<FindIdPwPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/notice" element={<NoticePage />} />
      </Routes>
      <Footer />       {/* 하단바 */}
    </Router>
    </AuthProvider>
  );
}

export default App;
