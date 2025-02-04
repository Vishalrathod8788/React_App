import { useState } from "react";

export const State = () => {
  const handleClickButton = () => {
    setCount(() => count + 1);
  };

  let [count, setCount] = useState(0);
  return (
    <>
      <section
        className="main-div"
        style={{
          // textAlign: "center",
          flexDirection: "column",
          fontSize: "4rem",
          paddingLeft: "27rem",
        }}
      >
        <h1>{count}</h1>
        <button onClick={handleClickButton}>Increment</button>
      </section>
    </>
  );
};
