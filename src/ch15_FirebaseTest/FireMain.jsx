import React from "react";
import FireStoreTest from "./FireStoreTest";
import FireStorageTest from "./FireStorageTest";
import FireStorageMultiTest from "./FireStorageMultiTest";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useContext } from "react";
import { Button } from "antd";
import UserContext from "./FireAuthContext";

const FireMain = () => {
  const { state, actions } = useContext(UserContext);
  // const [userData, setUserData] = useState(null);

  const emailAction = (data) => {
    actions.setUseremail(data);
  };

  const nameAction = (data) => {
    actions.setUsername(data);
  };
  // google auth
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        // setUserData(data.user); // user data 설정
        emailAction(data.user.email);
        nameAction(data.user.displayName);
        console.log(data.user.displayName); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // logout

  const onLogOutClick = () => {
    auth.signOut();
    // setUserData(null);
    emailAction(null);
    nameAction(null);
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
      {state.userName ? (
        <div>
          {/* <h1>{userData.displayName}님 안녕하세요^^</h1> */}
          <h1>{state.userName}님 안녕하세요^^</h1>
          <FireStoreTest />
          <h1>단일 이미지 스토리지에만 업로드됨</h1>
          <FireStorageTest />
          <h1>
            멀티 이미지 스토리지에 업로드 후 스토어에 URL 쓰고, 스토어에서
            불러와서 출력
          </h1>
          <FireStorageMultiTest />
        </div>
      ) : null}
    </div>
  );
};

export default FireMain;
