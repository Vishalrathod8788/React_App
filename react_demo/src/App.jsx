// import React from "react";
import Fragment from "react";

export const App = () => {
  return (
    // <React.Fragment>
    //   <h1>Welcome to My First React App!</h1>
    //   <div className="card">
    //     <p>Hello! I am learning React</p>
    //     <button onClick={() => alert("You clicked the button!")}>
    //       Click me!
    //     </button>
    //   </div>
    // </React.Fragment>

    <Fragment>
      <h1>Welcome to My First React App!</h1>
      <div className="card">
        <p>Hello! I am learning React</p>
        <button onClick={() => alert("You clicked the button!")}>
          Click me!
        </button>
      </div>
    </Fragment>
  );
};
