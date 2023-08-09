import React , { useState }from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom'; // 오류뜨면 
//npm install react-router-dom
//npm install @types/react-router-dom --save-dev  이거 설치하면 됨 (터미널)
import { useAuth } from '../function/AuthContext'; // useAuth를 임포트합니다.

const Header: React.FC = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();
    //const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 변수 추가
    
  
    // 로그인 상태일 때
    if (isLoggedIn) {
        return (
          <header className="header-container">
            <div className="title" onClick={() => navigate('/')}>
              Linked : Yeon
            </div>
            <button className="logout-btn" onClick={logout}> {/* logout 함수를 사용합니다. */}
              로그아웃
            </button>
          </header>
        );
      } 
      // 로그인 상태가 아닐 때
      else {
        return (
          <header className="header-container">
            <div className="title" onClick={() => navigate('/')}>
              Linked : Yeon
            </div>
            <button className="login-btn" onClick={() => navigate('/login')}>
              로그인
            </button>
          </header>
        );
      }
  }
  
  export default Header;
  
