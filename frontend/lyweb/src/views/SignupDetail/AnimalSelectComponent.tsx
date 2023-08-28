import React from 'react';

interface Props {
    userData: { animal?: string };
    setUserData: React.Dispatch<React.SetStateAction<{ animal?: string }>>;
}

const AnimalSelectComponent: React.FC<Props> = ({ userData, setUserData }) => {
    const handleAnimalSelect = (animal: string) => {
        setUserData({ ...userData, animal });
    };

    return (
        <div>
            {/* 예시로 동물 이미지 선택 버튼만 하나 작성하였습니다. */}
            <img src="/path/to/animal-image.jpg" alt="Animal" onClick={() => handleAnimalSelect('AnimalName')} />
            {userData.animal && <p>나는 {userData.animal}과 닮았습니다.</p>}
        </div>
    );
};

export default AnimalSelectComponent;
