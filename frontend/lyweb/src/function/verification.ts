// verification.ts
// 아직 구상중

/**
 * 한글 입력 방지
 * @param e - React.KeyboardEvent
 */
export const removeKorean = (str: string): string => {
    return str.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
};

export const checkOnlyNumber = (str : string): boolean => {
  if (/^[0-9]+$/.test(str)){
    return true;
  }
  else{
    return false;
  }
}