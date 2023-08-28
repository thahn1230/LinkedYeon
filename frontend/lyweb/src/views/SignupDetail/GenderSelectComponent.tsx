import React from 'react';
import { UserData } from '../types';


/*
interface Props {
    userData: {
        gender?: string;
        name?: string;
        height?: number;
        age?: number;
    };
    setUserData: React.Dispatch<React.SetStateAction<{
        gender?: string;
        name?: string;
        height?: number;
        age?: number;
    }>>;
}
*/

interface Props {
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}



const GenderSelectComponent: React.FC<Props> = ({ userData, setUserData }) => {
    if (!userData.height) {
        setUserData(prev => ({ ...prev, height: 170 }));
    }

    if (!userData.age) {
        setUserData(prev => ({ ...prev, age: 27 }));
    }

    const handleGenderSelect = (gender: string) => {
        setUserData({ ...userData, gender });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: name === 'height' || name === 'age' ? parseInt(value, 10) : value,
        }));
    };

    return (
        <div>
            <h2>개인 정보 입력</h2>

            <div>
                <label>
                    이름: <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
                </label>
            </div>

            <div>
                <label>
                    키:
                    <input type="range" name="height" min="140" max="200" value={userData.height} onChange={handleInputChange} />
                    {userData.height} cm
                </label>
            </div>

            <div>
                <label>
                    나이:
                    <input type="range" name="age" min="20" max="35" value={userData.age} onChange={handleInputChange} />
                    {userData.age} 세
                </label>
            </div>

            <div>
                <h3>성별 선택</h3>
                <button onClick={() => handleGenderSelect('남성')}>남성</button>
                <button onClick={() => handleGenderSelect('여성')}>여성</button>
            </div>
        </div>
    );
};

export default GenderSelectComponent;
