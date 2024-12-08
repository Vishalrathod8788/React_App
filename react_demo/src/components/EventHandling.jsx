import "./EV.css";

export const EventHandling = () => {
  function handleButtonClick() {
    alert("Button clicked!");
  }

  const hanleWelcomeBtn = (user) => {
    alert(`Hey! ${user} Welcome to my Learning Journey`);
  };

  function handleAreaEnter() {
    alert("Mouse Enter!");
  }

  function handleAreaLeave() {
    alert("Mouse Leave!");
  }

  return (
    <>
      <div className="main-div">
        {/* Standared Function */}
        <button className="events-handling" onClick={handleButtonClick}>
          Click Me 1
        </button>
        <br />

        {/* Fat Arrow Function */}
        <button onClick={() => handleButtonClick()}>Click Me 2</button>
        <br />

        {/* Inline Function */}
        <button onClick={(event) => console.log(event)}>Click Me 3</button>

        {/* Argument with Parameter */}
        <button onClick={() => hanleWelcomeBtn("Vishal")}>Click</button>
        {/* ........................................................................................ */}
        {/* <textarea
          className="events-handling"
          onMouseEnter={handleAreaEnter}
          onMouseLeave={handleAreaLeave}
          style={{ border: "5px solid black" }}
        ></textarea> */}
      </div>
    </>
  );
};
