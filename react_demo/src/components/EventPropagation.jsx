export const EventPropagation = () => {
  return (
    <>
      <section className="event-propagation">
        <div className="parent">
          <div className="child">
            <div className="grand-child">
              <button>Click Me!</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
