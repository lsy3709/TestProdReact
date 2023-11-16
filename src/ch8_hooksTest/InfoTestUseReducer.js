import React, { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const InfoTestUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>

      <div>
        <h1>
          이름: <b>{name}</b>
        </h1>
      </div>
      <div>
        <h1>
          닉네임: <b>{nickname}</b>
        </h1>
      </div>
    </div>
  );
};

export default InfoTestUseReducer;
