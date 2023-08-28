// verification.ts
// 아직 구상중

/**
 * 한글 입력 방지
 * @param e - React.KeyboardEvent
 */
export const removeKorean = (str: string): string => {
    return str.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
  };