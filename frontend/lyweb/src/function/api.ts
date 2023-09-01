// api.ts
// 간단한 함수 정의 백엔드와 통신하는 함수들을 정의합니다. (가제)

export const loginUser = async (username: string, password: string) => {
  const response = await fetch('YOUR_BACKEND_URL/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    }),
    credentials: 'include' // 쿠키를 포함하여 요청을 전송
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }

  const data = await response.json();
  return data;
};


// 로그아웃 함수 
export const logoutUser = async () => {
  const response = await fetch('YOUR_BACKEND_URL/logout', {
      method: 'POST',
      credentials: 'include' // 쿠키를 포함하여 요청을 전송
  });

  if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
  }

  return await response.json();
};



// 회원가입 관련 
  
// 회원가입 필요시 타입 정의
interface SignupData {
  username: string;
  password: string;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  userType: string;
  gender: string;
  age: string;
  height: string;
  mbti: string;
  weight: string;
  bodyType: string;
  school: string;
  faceType: string;
  personality: string;
  smoking: string;
  drinking: string;
  hobby: string;

  //이상형 정보 
  //ideal_nickname: string;  필요없음 
  ideal_height: string;
  ideal_weight: string;
  ideal_mbti: string;
  ideal_age: number;
  ideal_gender: string;
  ideal_bodyType: string;
  ideal_style: string;
  ideal_faceType: string;
  ideal_personality: string;
  ideal_school: string;

 // 10문 10답 
  Q_ONE: string;
  Q_TWO: string;
  Q_THREE: string;
  Q_FOUR: string;
  Q_FIVE: string;
  Q_SIX: string;
  Q_SEVEN: string;
  Q_EIGHT: string;
  Q_NINE: string;
  Q_TEN: string;
  // ... 나머지 답변도 타입 정의
}

export const signupAPI = async (data: SignupData) => {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;

  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }

}



// 아이디 중복 확인 함수 
export const checkIDDuplicate = async (userID: string) => {
  // 서버에 요청을 보내 아이디 중복을 확인합니다.
  // 예시로 fetch를 사용하였습니다.
  const response = await fetch("/check-duplicate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userID }),
  });

  const data = await response.json();
  return data.isDuplicate; // 예시: isDuplicate가 true면 중복, false면 중복 아님
};

  








  export const getUserInfo = async (token: string) => {
    const response = await fetch('YOUR_BACKEND_URL/user_info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  
    return response.json();
  };
  