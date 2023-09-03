// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './function/AuthContext'; 
import './App.css';
import Header from './components/Header';
import MainPage from './views/MainPage';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import FindIdPwPage from './views/FindIdPwPage';
import MyPage from './views/MyPage';
import NoticePage from './views/Notice/NoticePage';
import Footer from './components/Footer';
import PrivateRoute from './function/PrivateRoute';  // 로그인 여부에 따른 페이지 

const App: React.FC = () => {
  return (
    <AuthProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/FindIdPw" element={<FindIdPwPage />} />
        <Route path="/mypage" element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          } />
        <Route path="/notice" element={<NoticePage />} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
