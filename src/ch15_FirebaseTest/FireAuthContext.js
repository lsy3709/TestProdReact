import React, { createContext, useState } from "react";

// 속성 예시2 , 함수로 전달하기.
const UserContext = createContext({
  // state 속성으로 값으로
  state: { userName: "", userEmail: "" },
  // actions 속성으로 함수로
  actions: {
    setUsername: () => {},
    setUseremail: () => {},
  },
});

// provider 만들기. = 세터 랑 역할이 비슷
const UserProvider = ({ children }) => {
  const [userName, setUsername] = useState("");
  const [userEmail, setUseremail] = useState("");
  const value = {
    // 상태값
    state: { userName, userEmail },
    // 업데이트 함수, 세터
    actions: { setUsername, setUseremail },
  };
  // 오류 발생해도 잠시 보류.

  return (
    // props 형태로 value라는 속으로  값, 함수를 같이 전달하면서,
    // children 자리에 또 다른 props 전달함.
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};
export { UserProvider };
export default UserContext;
