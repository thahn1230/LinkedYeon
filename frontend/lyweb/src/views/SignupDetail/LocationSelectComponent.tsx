import React, { useState, useEffect } from 'react';

interface Props {
    userData: { location?: string };
    setUserData: React.Dispatch<React.SetStateAction<{ location?: string }>>;
}

const LocationSelectComponent: React.FC<Props> = ({ userData, setUserData }) => {
    const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
    const [cities, setCities] = useState<string[]>([]);

    const provinces = ['서울', '경기', '부산']; // 예시로 몇 개의 시/도만 추가했습니다.

    const handleProvinceSelect = (province: string) => {
        setSelectedProvince(province);
        // 여기에 선택한 시/도에 따라 도시 목록을 변경하는 로직을 추가하세요.
        // 예: 서울을 선택하면 강남구, 강동구 등의 도시 목록을 setCities로 설정
    };

    const handleCitySelect = (city: string) => {
        setUserData({ ...userData, location: city });
    };

    return (
        <div>
            <h2>지역 선택</h2>
            <div>
                <h3>시/도</h3>
                {provinces.map((province) => (
                    <button key={province} onClick={() => handleProvinceSelect(province)}>
                        {province}
                    </button>
                ))}
            </div>
            <div>
                <h3>시/군/구</h3>
                {cities.map((city) => (
                    <button key={city} onClick={() => handleCitySelect(city)}>
                        {city}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LocationSelectComponent;
