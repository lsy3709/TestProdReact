import React from "react";
import FireStoreTest from "./FireStoreTest";
import FireStorageTest from "./FireStorageTest";
import FireStorageMultiTest from "./FireStorageMultiTest";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState, useEffect } from "react";
import { Button } from "antd";
// 컨텍스트 예제
// import UserContext from "./FireAuthContext";

const FireMain = () => {
  // const { state, actions } = useContext(UserContext);
  const [userData, setUserData] = useState("");

  // const emailAction = (data) => {
  //   actions.setUseremail(data);
  // };

  // const nameAction = (data) => {
  //   actions.setUsername(data);
  // };

  const setUserDataAction = (data) => {
    setUserData(data);
  };
  // const noSetUserDataAction = () => {};

  // 실행시 마다, 로그인 정보 확인.

  useEffect(() => {
    // 가져오기 샘플
    setUserData(sessionStorage.getItem("userName"));
    //   setLogState(sessionStorage.getItem("email"));
    //   console.log("logstate", logState);
  }, []);

  // google auth
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        // setUserData(data.user); // user data 설정
        // emailAction(data.user.email);
        // nameAction(data.user.displayName);
        // console.log(data.user.displayName); // console로 들어온 데이터 표시
        sessionStorage.setItem("userName", data.user.displayName);
        setUserDataAction(data.user.displayName);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // logout

  const onLogOutClick = () => {
    auth.signOut();
    setUserData("");
    sessionStorage.clear();
    // emailAction(null);
    // nameAction(null);
    //      setItem(key, value) - 키/값 쌍을 저장한다.
    // getItem(key) - 키에 해당하는 값을 받아온다.
    // removeItem(key) - 키와 해당 값을 삭제한다.
    // clear() - 모두 다 삭제한다.
    // length - 저장된 항목의 개수를 출력한다.
  };
  return (
    <div style={{ marginLeft: "10px", marginTop: "10px" }}>
      <h2>구글 인증 후, 사용하세요.</h2>
      <Button type="primary" onClick={handleGoogleLogin}>
        Google Login
      </Button>
      &nbsp;&nbsp;
      <Button type="primary" onClick={onLogOutClick}>
        Google Logout
      </Button>
      {/* {userData ? ( */}
      {
        // state.userName ? (
        userData ? (
          <div>
            {/* <h1>{userData.displayName}님 안녕하세요^^</h1> */}
            <h1>{userData}님 안녕하세요^^</h1>
            <FireStoreTest />
            <h1>단일 이미지 스토리지에만 업로드됨</h1>
            <FireStorageTest />
            <h1>
              멀티 이미지 스토리지에 업로드 후 스토어에 URL 쓰고, 스토어에서
              불러와서 출력
            </h1>
            <FireStorageMultiTest />
          </div>
        ) : null
      }
    </div>
  );
};

export default FireMain;
