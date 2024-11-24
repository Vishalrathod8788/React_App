export const SeriesCard = (props) => {
  return (
    <li key={props.curEle.id}>
      <div>
        <img
          src={props.curEle.img_url}
          alt={props.curEle.name}
          style={{ width: "300px" }}
        ></img>
      </div>
      <h2>Name : {props.curEle.name}</h2>
      <h3>Rating : {props.curEle.rating}</h3>
      <p>summary : {props.curEle.description}</p>
      <p>Genre : {props.curEle.genre}</p>
      <p>Cast : {props.curEle.cast}</p>
      <a href={props.curEle.watch_url} target="_VGR">
        Watch Now
      </a>
    </li>
  );
};
