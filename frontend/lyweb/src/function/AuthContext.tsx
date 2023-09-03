// 로그인 관련 함수 로그인 상태 정의 및 로그인, 로그아웃 함수 정의 (JWT 토큰 사용)
import React, { useState, createContext, useContext } from 'react';
import { loginUser, logoutUser } from './api';

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
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token')); // token이 존재하면 true, 아니면 false

    const login = async (username: string, password: string) => {
        try {
            const data = await loginUser(username, password); // API 호출
            if (data.success && data.token) {
                //localStorage.setItem('token', data.token); 로컬에 저장 로직 제거 
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

    const logout = async () => {
        try {
            await logoutUser(); // 로그아웃 API 호출
            setIsLoggedIn(false);
        } catch (error) {
            console.error("로그아웃 중 에러 발생:", "에러 발생");
        }
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
