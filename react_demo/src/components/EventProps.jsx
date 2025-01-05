export const EventProps = () => {
  const handleClick = (user) => {
    alert(`Welcome ${user}`);
  };
  const handleHover = () => {
    alert("Hovered");
  };
  return (
    <>
      <WelcomeUser
        buttonClick={() => handleClick("Vishal")}
        buttonHover={() => handleHover()}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { handleClick, handleHover } = props;
  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
      <button onMouseEnter={handleHover}>Mouse Hovered</button>
    </>
  );
};
