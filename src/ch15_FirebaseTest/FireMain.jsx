import React from "react";
import FireStoreTest from "./FireStoreTest";
import FireStorageTest from "./FireStorageTest";
import FireStorageMultiTest from "./FireStorageMultiTest";

const FireMain = () => {
  return (
    <div>
      <FireStoreTest />
      <h1>단일 이미지 스토리지에만 업로드됨</h1>
      <FireStorageTest />
      <h1>
        멀티 이미지 스토리지에 업로드 후 스토어에 URL 쓰고, 스토어에서 불러와서
        출력
      </h1>
      <FireStorageMultiTest />
    </div>
  );
};

export default FireMain;
