export const App = () => {
  // return (
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
  // <Fragment>
  //   <h1>Welcome to My First React App!</h1>
  //   <div className="card">
  //     <p>Hello! I am learning React</p>
  //     <button onClick={() => alert("You clicked the button!")}>
  //       Click me!
  //     </button>
  //   </div>
  // </Fragment>
  // );
};

export const FindAge = () => {
  const name = "Stranger Things";
  const rating = "8.7/10";
  const summary =
    "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.";
  const genre = "Drama, Fantasy, Horror";

  // const netflixShow = {
  //   title: "",
  //   ,
  //   summary: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
  //   genre: "Drama, Fantasy, Horror"
  // };

  return (
    <>
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
          alt="Stranger Things"
          style={{ width: "300px" }}
        />
      </div>
      <h2>Name : {name}</h2>
      <h3>Rating : {rating}</h3>
      <p>summary : {summary}</p>
      <p>Genre : {genre}</p>
      <button>Watch Now</button>
    </>
  );
};
