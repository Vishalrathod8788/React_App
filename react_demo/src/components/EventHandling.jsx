import "./EV.css";

export const EventHandling = () => {
  const handleClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    console.log(event.target.textContent);
    console.log(event.view.document.getElementById("root"));
    alert("Button Clicked!");
  };

  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
};
