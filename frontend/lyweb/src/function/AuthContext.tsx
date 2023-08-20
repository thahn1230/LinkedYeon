// 로그인 관련 함수 로그인 상태 정의 및 로그인, 로그아웃 함수 정의 (JWT 토큰 사용)
import React, { useState, createContext, useContext } from 'react';
import { loginUser } from './api';

// 로그인 상태와 관련된 타입 정의
type AuthContextType = {
    isLoggedIn: boolean;
    login: (username: string, password: string) => Promise<{ success: boolean; message?: string }>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));

    const login = async (username: string, password: string) => {
        try {
            const data = await loginUser(username, password); // API 호출
            if (data.success && data.token) {
                localStorage.setItem('token', data.token);
                setIsLoggedIn(true);
                return { success: true }; // 로그인 성공
            } else {
                return { success: false, message: data.message || "로그인 실패" }; // 로그인 실패
            }
        } catch (error) {
            console.error("로그인 중 에러 발생:", "에러 발생!!");
            return { success: false, message: "에러 발생!!" }; // API 호출 실패
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
