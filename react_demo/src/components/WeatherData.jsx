export const WeatherData = ({ data }) => {
  return (
    <div>
      <h2>{data.city}</h2>
      <p>{data.weather}</p>
      <p>{data.temperature}</p>
      <p>{data.condition}</p>
    </div>
  );
};
