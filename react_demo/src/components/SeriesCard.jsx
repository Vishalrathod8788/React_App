import "./style.css";
export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  const ratingStyle = rating >= 8.5 ? "supper_hit" : "average";
  return (
    <li className="Demo" style={{ fontFamily: "Jost" }}>
      <div>
        <img src={img_url} alt={name}></img>
      </div>
      <div className="contain">
        <h2>Name : {name}</h2>
        <h3>
          Rating : <span className={`rating ${ratingStyle}`}>{rating}</span>
        </h3>
        <p>Summary : {description}</p>
        <p>Genre : {genre}</p>
        <p>Cast : {cast}</p>
      </div>
      <a href={watch_url} target="_VGR">
        <span className={`rating ${ratingStyle}`}>Watch Now</span>
      </a>
    </li>
  );
};
