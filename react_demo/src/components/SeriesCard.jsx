export const SeriesCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  return (
    <li>
      <div>
        <img src={img_url} alt={name} style={{ width: "300px" }}></img>
      </div>
      <h2>Name : {name}</h2>
      <h3>Rating : {rating}</h3>
      <p>summary : {description}</p>
      <p>Genre : {genre}</p>
      <p>Cast : {cast}</p>
      <a href={watch_url} target="_VGR">
        Watch Now
      </a>
    </li>
  );
};
