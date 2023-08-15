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

  const handleLogin = async () => {

    const hardcodedUsername = "admin";
    const hardcodedPassword = "password123";
    
    if (username === hardcodedUsername && password === hardcodedPassword) {
      login();
      setTimeout(() => { // 로그인 성공 후 일정 시간 후 메인 페이지로 리다이렉트
        navigate('/');
      }, 2000); // 2초 후 이동
      alert("로그인이 성공했습니다.");
       
    } else {
      if(username !== hardcodedUsername){
        alert("아이디가 올바르지 않습니다. 다시 확인해주세요.");
      }else {
        alert("비밀번호가 틀렸습니다. 다시 확인해주세요.");
      }
      
    }

    /* 백엔드 로직 적용 예정 
    try {
      const data = await loginUser(username, password);
      if (data.success) {
        // 로그인 성공 처리
      } else {
        // 로그인 실패 처리
      }
    } catch (error) {
      console.error("로그인 중 에러 발생:", error);
    }
    */
  };

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
      <button onClick={handleLogin} className="login-button">
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
