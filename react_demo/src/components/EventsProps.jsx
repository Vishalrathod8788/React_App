import "./EV.css";
export const EventProps = () => {
  function HandleMouseHover() {
    alert("Hey! Thanks Hover Me");
  }

  const HandleWelcomeUser = (name) => {
    alert(`Welcome ${name}`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Vishal")}
        onMouseEnter={HandleMouseHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const data = props;
  const hanldeGreeting = () => {
    console.log("Hello! Greeting");
    props.onClick("CAD");
  };
  return (
    <>
      <div style={{ textAlign: "center", padding: "20rem" }}>
        <button onClick={data.onClick}>Click Me!</button>
        <button onMouseEnter={data.onMouseEnter}>Hover Me!</button>
        <button onClick={hanldeGreeting}>Greeting.</button>
      </div>
    </>
  );
};
