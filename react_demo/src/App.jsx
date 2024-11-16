// import React from "react";
import { Fragment } from "react";

export const App = () => {
  return (
    // You Can't One more component return in JavaScript
    // but You can Component value add in Array with Key and Pair to store and return
    // but It's complicate so You will use to return <> write component code <> this is absulutly right

    // Method 1 :
    // <>
    //   <h1>Welcome to My First React App!</h1>
    //   <div className="card">
    //     <p>Hello! I am learning React</p>
    //     <button onClick={() => alert("You clicked the button!")}>
    //       Click me!
    //     </button>
    //   </div>
    // </>

    // Method 2 :
    // <React.Fragment>
    //   <h1>Welcome to My First React App!</h1>
    //   <div className="card">
    //     <p>Hello! I am learning React</p>
    //     <button onClick={() => alert("You clicked the button!")}>
    //       Click me!
    //     </button>
    //   </div>
    // </React.Fragment>

    // Method 3 :
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
