import React from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import styled from "styled-components";

const MainTitleTextCss = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const MainTextCss = styled.p`
  font-size: 20px;
  font-weight: bold;
  background-color: red;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin-left: 20px;

  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <h1>메인 화면입니다.</h1>

        <Container>
          <MainTitleTextCss>styled-components test</MainTitleTextCss>
          <MainTextCss>2번째 텍스트 효과 확인하기.</MainTextCss>

          <Button
            title="회원가입 이동"
            type="primary"
            onClick={() => {
              navigate("/join");
            }}
          >
            회원가입 이동
          </Button>
          <br />
          <br />
          <Button
            title="mycount 이동"
            type="primary"
            onClick={() => {
              navigate("/mycount");
            }}
          >
            mycount 이동
          </Button>
          <br />
          <Button
            title="스크롤 ref 테스트 이동"
            type="dashed"
            onClick={() => {
              navigate("/scrollRefTest");
            }}
          >
            스크롤 ref 테스트 이동
          </Button>
          <br />
          <Button
            title="list 키 설정의무 확인 및 데이터 추가 삭제"
            type="primary"
            onClick={() => {
              navigate("/listKeyDataAddDel");
            }}
          >
            키 설정의무 확인 및 데이터 추가 삭제 이동
          </Button>
          <br />
          <Button
            title="클래스형 컴포넌트 생명주기 테스트 "
            type="primary"
            onClick={() => {
              navigate("/ClassLifeCycleTest");
            }}
          >
            클래스형 컴포넌트 생명주기 테스트
          </Button>
          <br />
          <Button
            title="useStateTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useStateTest");
            }}
          >
            useStateTest 테스트
          </Button>
          <br />
          <Button
            title="useEffectTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useEffectTest");
            }}
          >
            useEffectTest 테스트
          </Button>
          <br />
          <Button
            title="useReducerTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useReducerTest");
            }}
          >
            useReducerTest 테스트
          </Button>
          <br />
          <Button
            title="useReducerTest2 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useReducerTest2");
            }}
          >
            useReducerTest2 테스트
          </Button>
          <br />
          <Button
            title="useMemoTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useMemoTest");
            }}
          >
            useMemoTest 테스트
          </Button>
          <br />
          <Button
            title="useCallbackTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useCallbackTest");
            }}
          >
            useCallbackTest 테스트
          </Button>
          <br />
          <Button
            title="useRefTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useRefTest");
            }}
          >
            useRefTest 테스트
          </Button>
          <br />
          <Button
            title="useParamsTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useParamsTest");
            }}
          >
            useParamsTest 테스트
          </Button>
          <br />
          <Button
            title="customHooksTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/customHooksTest");
            }}
          >
            customHooksTest 테스트
          </Button>
          <br />
          <Button
            title="sassTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/sassTest");
            }}
          >
            sassTest 테스트
          </Button>
          <br />
          <Button
            title="styledComponentsTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/styledComponentsTest");
            }}
          >
            styledComponentsTest 테스트
          </Button>
          <br />
          <Button
            title="todoMain 미니프로젝트 "
            type="primary"
            onClick={() => {
              navigate("/todoMain");
            }}
          >
            todoMain 미니프로젝트
          </Button>
          <br />
          <Button
            title="immerTest"
            type="primary"
            onClick={() => {
              navigate("/immerTest");
            }}
          >
            immerTest, 불변성 쉽게 유지
          </Button>
          <br />
          <Button
            title="immerTestZone"
            type="primary"
            onClick={() => {
              navigate("/immerTestZone");
            }}
          >
            immerTestZone, 불변성 쉽게 유지
          </Button>
          <br />
          <Button
            title="apiTest"
            type="primary"
            onClick={() => {
              navigate("/apiTest");
            }}
          >
            apiTest 확인
          </Button>
          <br />
          <Button
            title="apiTest2"
            type="primary"
            onClick={() => {
              navigate("/apiTest2");
            }}
          >
            apiTest2 확인
          </Button>
          <br />
          <Button
            title="apiTest3"
            type="primary"
            onClick={() => {
              navigate("/apiTest3");
            }}
          >
            apiTest3 확인
          </Button>
          <br />
          <Button
            title="newsPageTest/:category"
            type="primary"
            onClick={() => {
              navigate("/newsPageTest/all");
            }}
          >
            newsPageTest
          </Button>
          <br />
          <Button
            title="contextAPITest"
            type="primary"
            onClick={() => {
              navigate("/contextAPITest");
            }}
          >
            contextAPITest 확인
          </Button>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Main;
