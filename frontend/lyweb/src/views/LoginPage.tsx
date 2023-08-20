import React, { useState } from 'react';
import './LoginPage.css';
import { loginUser } from '../function/api';   // 위에서 정의한 api 함수를 임포트
import { useNavigate } from 'react-router-dom'; // useNavigate를 임포트
import { useAuth } from '../function/AuthContext'; // useAuth를 임포트합니다.

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');   
  const [password, setPassword] = useState('');
  //const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 변수
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (username: string, password: string) => {
    try {
       const result = await login(username, password);
       if (result.success) {
          navigate('/');
       } else {
          alert(result.message || "로그인 실패");
       }
    } catch (error) {
       console.error("로그인 중 에러 발생:", "에러 발생!!");
    }
 }
 


  return (
    <div className="login-container">
      <h2>로그인</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={() => handleLogin(username, password)} className="login-button">
    로그인
      </button>
      <button onClick={() => navigate('/Signup')} className="signup-button">
        회원가입
      </button>
      <button onClick={() => navigate('/FindIdPw')} className="find-id-pw-button">
        ID/PW 찾기
      </button>
    </div>
  );
}

export default LoginPage;
