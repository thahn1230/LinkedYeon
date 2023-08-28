import React from 'react';
import { UserData } from '../types';
import './DrinkingPreferenceComponent.css';

interface Props {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const DrinkingPreferenceComponent: React.FC<Props> = ({ userData, setUserData }) => {
  const handleDrinkingPreference = (preference: '자주' | '보통' | '가끔' | '전혀') => {
    setUserData({ ...userData, drinkingPreference: preference });
  };

  return (
    <div className='preference-container'>
      <h2>술은 얼마나 좋아해?</h2>

      <h3>자주: 주 3회 이상</h3>
      <h3>보통: 주 1~2회 </h3>
      <h3>가끔: 가끔 분위기 맞춰서</h3>
      <h3>전혀: 전혀 안마심</h3>

      <div className='buttons-container'>
        <button 
          className={`button ${userData.drinkingPreference === '자주' ? 'selected' : ''}`} 
          onClick={() => handleDrinkingPreference('자주')}
        >
          자주
        </button>
        <button 
          className={`button ${userData.drinkingPreference === '보통' ? 'selected' : ''}`} 
          onClick={() => handleDrinkingPreference('보통')}
        >
          보통
        </button>
        <button 
          className={`button ${userData.drinkingPreference === '가끔' ? 'selected' : ''}`} 
          onClick={() => handleDrinkingPreference('가끔')}
        >
          가끔
        </button>
        <button 
          className={`button ${userData.drinkingPreference === '전혀' ? 'selected' : ''}`} 
          onClick={() => handleDrinkingPreference('전혀')}
        >
          전혀
        </button>
      </div>

      <p className="feedback">
      나는 {userData.drinkingPreference ? <span className="highlighted">{userData.drinkingPreference}</span> : null}마셔 
      </p>

    </div>
  );
};

export default DrinkingPreferenceComponent;
