export const NetflixSeries = () => {
  const netflix = {
    name: "Stranger Things",
    rating: "8.7/10",
    summary:
      "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
    genre: "Drama, Fantasy, Horror",
    age: 18,
  };
  const canWatch = () => {
    if (netflix.age >= 18) return "Watch Now";
    return "Not Available";
  };

  return (
    <>
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
          alt="Stranger Things"
          style={{ width: "300px" }}
        ></img>
      </div>
      <h2>Name : {netflix.name}</h2>
      <h3>Rating : {netflix.rating}</h3>
      <p>summary : {netflix.summary}</p>
      <p>Genre : {netflix.genre}</p>
      <button>{canWatch()}</button>
    </>
  );
};
