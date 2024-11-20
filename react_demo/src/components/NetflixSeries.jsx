import seriesData from "../api/seriesData.json";

export const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curEle) => {
        return (
          <li key={curEle.id}>
            <div>
              <img
                src={curEle.img_url}
                alt={curEle.name}
                style={{ width: "300px" }}
              ></img>
            </div>
            <h2>Name : {curEle.name}</h2>
            <h3>Rating : {curEle.rating}</h3>
            <p>summary : {curEle.description}</p>
            <p>Genre : {curEle.genre}</p>
            <p>Cast : {curEle.cast}</p>
            <a href={curEle.watch_url} target="_VGR">
              Watch Now
            </a>
          </li>
        );
      })}
    </ul>
  );
};
