// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 스토어
import { getFirestore } from "@firebase/firestore";
// 파이어스토어에 접근할수 있게해주는 ID 등등 - 로그인해야지 준다
//스토리지
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
//초기화
const app = initializeApp(firebaseConfig);
//스토어
export const db = getFirestore(app);
//스토리지
export const storage = getStorage(app);
