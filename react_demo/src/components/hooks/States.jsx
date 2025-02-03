export const State = () => {
  let count = 0;
  
  return (
    <>
      <section
        className="main-div"
        style={{
          textAlign: "center",
          flexDirection: "column",
          fontSize: "4rem",
        }}
      >
        <h1>{count}</h1>
        <button onClick={handleClickButton}>Click Me!</button>
      </section>
    </>
  );
};
