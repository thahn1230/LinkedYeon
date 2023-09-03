// types.ts
export interface UserData {
    animal?: string;
    gender?: string;
    age?: number;
    location?: string;
    bodyType?: string;
    name?: string;
    height?: number;
    smokingStatus?: string;
    militaryStatus?: string;
    religion?: '무교' | '기독교' | '천주교' | '불교';
    drinkingPreference?: '자주' | '보통' | '가끔' | '전혀';
    id?: string;
    pw?: string;
    email?: string;
    birthdate?: number;
    phone?: number;
    // 기타 다른 데이터 타입들...
}
