import React, { useState } from 'react';
import { UserData } from '../types';
import './MilitaryAndSmokingComponent.css';


interface Props {
    userData: UserData; 
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const MilitaryAndSmokingComponent: React.FC<Props> = ({ userData, setUserData }) => {
    const handleMilitaryStatus = (status: '군필' | '미필') => {
        setUserData({ ...userData, militaryStatus: status });
    };

    const handleSmokingStatus = (status: '비흡연자' | '흡연자') => {
        setUserData({ ...userData, smokingStatus: status });
    };

    return (
        <div className='body-type-container'>
            <h2>군필, 흡연 여부를 알려주세요</h2>

            <div>
                <h3>군필 여부</h3>
                <button 
                    className={`button ${userData.militaryStatus === '군필' ? 'selected' : ''}`} 
                    onClick={() => handleMilitaryStatus('군필')}
                >
                    군필
                </button>
                <button 
                    className={`button ${userData.militaryStatus === '미필' ? 'selected' : ''}`} 
                    onClick={() => handleMilitaryStatus('미필')}
                >
                    미필
                </button>
                <p className="feedback">{userData.militaryStatus && <span className="highlighted">{userData.militaryStatus}</span>}이야</p>
            </div>

            <div>
                <h3>흡연 여부</h3>
                <button 
                    className={`button ${userData.smokingStatus === '비흡연자' ? 'selected' : ''}`} 
                    onClick={() => handleSmokingStatus('비흡연자')}
                >
                    비흡연자
                </button>
                <button 
                    className={`button ${userData.smokingStatus === '흡연자' ? 'selected' : ''}`} 
                    onClick={() => handleSmokingStatus('흡연자')}
                >
                    흡연자
                </button>
                <p className="feedback">{userData.smokingStatus && <span className="highlighted">{userData.smokingStatus}</span>}야</p>
            </div>
        </div>
    );
};

export default MilitaryAndSmokingComponent;
