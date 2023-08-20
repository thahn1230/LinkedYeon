// PrivateRoute.tsx  로그인 여부에 따라 페이지를 보여주는 PrivateRoute 함수입니다.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../function/AuthContext';

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      alert("먼저 로그인부탁드립니다.");
      console.log("Before navigate to login");
      navigate('/login');
      console.log("After navigate to login");
    }
  }, [isLoggedIn, navigate]);

  return <>{children}</>;
};

export default PrivateRoute;
