import React, { useState } from 'react';
import './BodyTypeComponent.css';

// UserData와 props 타입 정의
interface Props {
    userData: {bodyType?: string};
    setUserData:React.Dispatch<React.SetStateAction<{bodyType?: string}>>;

}


const BodyTypeComponent: React.FC<Props> = ({ userData, setUserData }) => {
  
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const handleSelect = (type: string) => {
    setSelectedType(type);
    setUserData({ ...userData, bodyType: type }); // 여기에서 userData를 업데이트 합니다.
  };

  return (
    <div className="body-type-container">
      <h2>당신의 체형을 알려주세요.</h2>
      <div className="buttons-container">
        {["슬림", "보통", "통통", "탄탄"].map((type) => (
          <button
            key={type}
            className={`body-type-button ${selectedType === type ? "selected" : ""}`}
            onClick={() => handleSelect(type)}
          >
            {type}
          </button>
        ))}
      </div>
      {selectedType && <p>내 체형은 {selectedType} 체형이야.</p>}
    </div>
  );
};

export default BodyTypeComponent;
