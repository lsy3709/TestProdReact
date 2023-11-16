import React from "react";

import { ColorConsumer } from "./testColor";

const colors = ["red", "orange", "blue", "indigo", "violet", "aqua", "navy"];

const TestSelectColors = () => {
  return (
    <div>
      <h2>색상 선택하기</h2>

      <ColorConsumer>
        {({ actions, state }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default TestSelectColors;
