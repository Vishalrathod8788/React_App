import "./EV.css";

export const EventHandling = () => {
  function handleButtonClick() {
    alert("Button clicked!");
  }

  function handleAreaEnter() {
    alert("Mouse Enter!");
  }

  function handleAreaLeave() {
    alert("Mouse Leave!");
  }

  return (
    <>
      <div className="main-div">
        <button className="events-handling" onClick={handleButtonClick}>
          Click Me!
        </button>
        <textarea
          className="events-handling"
          onMouseEnter={handleAreaEnter}
          onMouseLeave={handleAreaLeave}
          style={{ border: "5px solid black" }}
        ></textarea>
      </div>
    </>
  );
};
