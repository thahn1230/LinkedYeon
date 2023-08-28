import React from 'react';
import { UserData } from '../types';
import './ReligionComponent.css';

interface Props {
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const ReligionComponent: React.FC<Props> = ({ userData, setUserData }) => {
    const handleReligionChoice = (religion: '무교' | '기독교' | '천주교' | '불교') => {
        setUserData({ ...userData, religion: religion });
    };

    return (
        <div className='religion-container'>
            <h2>종교가 뭐야?</h2>
            
            <div>
                <button 
                    className={`button ${userData.religion === '무교' ? 'selected' : ''}`}
                    onClick={() => handleReligionChoice('무교')}
                >
                    무교
                </button>
                <button 
                    className={`button ${userData.religion === '기독교' ? 'selected' : ''}`}
                    onClick={() => handleReligionChoice('기독교')}
                >
                    기독교
                </button>
                <button 
                    className={`button ${userData.religion === '천주교' ? 'selected' : ''}`}
                    onClick={() => handleReligionChoice('천주교')}
                >
                    천주교
                </button>
                <button 
                    className={`button ${userData.religion === '불교' ? 'selected' : ''}`}
                    onClick={() => handleReligionChoice('불교')}
                >
                    불교
                </button>
            </div>
            
            <p className="feedback">
            나는 <span className="highlighted">{userData.religion}</span>야
            </p>
        </div>
    );
};

export default ReligionComponent;
