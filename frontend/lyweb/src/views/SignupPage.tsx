import React, { useState } from 'react';
import { UserData } from './types';
//import { signupAPI } from '../function/api';   // 위에서 정의한 api 함수를 임포트
import './SignupPage.css';
import AnimalSelectComponent from './SignupDetail/AnimalSelectComponent';
import GenderSelectComponent from './SignupDetail/GenderSelectComponent';
import LocationSelectComponent from './SignupDetail/LocationSelectComponent';
import BodyTypeComponent from './SignupDetail/BodyTypeComponent';
import MilitaryAndSmokingComponent from './SignupDetail/MilitaryAndSmokingComponent';
import ReligionComponent from './SignupDetail/ReligionComponent';
import DrinkingPreferenceComponent from './SignupDetail/DrinkingPreferenceComponent';
import FundamentalComponent from './SignupDetail/FundamentalComponent';


/*
interface UserData {
    animal?: string;
    name?: string;
    height:number;
    gender?: string;
    age?: number;
    location?: string;
    bodyType?: string;
    // 기타 다른 데이터 타입들...
}
*/
const SignupPage: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [userData, setUserData] = useState<UserData>({});

    const handleNextPage = () => {
        if (page < 10) setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };


    // const onSignupClick = async () => {
    //     try {
    //         const result = await signupAPI(userData);
    //         console.log(result);
    //         // 성공적으로 회원가입이 되었을 때의 로직 (예: 페이지 이동, 메시지 표시 등)
    //     } catch (error) {
    //         console.error(error);  
            
    //     }
    // };



    return (
        <div>
            {page === 1 && <AnimalSelectComponent userData={userData} setUserData={setUserData} />}
            {page === 2 && <GenderSelectComponent userData={userData} setUserData={setUserData} />}
            {page === 3 && <LocationSelectComponent userData={userData} setUserData={setUserData} />}
            {page === 4 && <BodyTypeComponent userData={userData} setUserData={setUserData} />}
            {page === 5 && <MilitaryAndSmokingComponent userData={userData} setUserData={setUserData} />}
            {page === 6 && <ReligionComponent userData={userData} setUserData={setUserData} />}
            {page === 7 && <DrinkingPreferenceComponent userData={userData} setUserData={setUserData} />}
            {page === 8 && <FundamentalComponent userData={userData} setUserData={setUserData} />}
            
            <div className="nav-buttons">  
            <button onClick={handlePrevPage}>이전</button>
            <button onClick={handleNextPage}>다음</button>
            {/* <button onClick={onSignupClick}>확인</button> */}
            </div>
        </div>
    );
};

export default SignupPage;
