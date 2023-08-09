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
      })
    });
  
    return response.json();
  };
  
  export const registerUser = async (username: string, password: string, email: string) => {
    const response = await fetch('YOUR_BACKEND_URL/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email
      })
    });
  
    return response.json();
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
  