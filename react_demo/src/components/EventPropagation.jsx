import "./EV.css";

export const EventPropagation = () => {
  const handleGrandParentClick = () => {
    console.log("Grand Parent Clicked");
    alert("Grand Parent Clicked");
  };

  const handleParentClick = () => {
    console.log("Parent Clicked");
    alert("Parent Clicked");
  };

  const handleChildClick = (event) => {
    alert("Child Clicked");
    console.log(event);
    console.log("Child Clicked");
  };

  return (
    <>
      <section className="event-propagation">
        <div className="g-div" onClick={handleGrandParentClick}>
          <div className="p-div" onClick={handleParentClick}>
            <button className="c-div" onCanPlay={handleChildClick}>
              Click Me!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
