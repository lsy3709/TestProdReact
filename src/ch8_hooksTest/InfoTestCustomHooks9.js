import React from "react";

import useInfoInputFunc from "./InfoInputFunc";

const InfoTestCustomHooks9 = () => {
  const [state, onChange] = useInfoInputFunc({ name: "", nickname: "" });
  const { name, nickname } = state;

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

export default InfoTestCustomHooks9;
