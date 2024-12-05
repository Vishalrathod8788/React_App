import style from "./Profile.module.css";

export const PersonalCard = ({ data }) => {
  const { name, age, occupation, location } = data;
  return (
    <li className={style.card}>
      <h1 className={style["card-content"]}>Name : {name}</h1>
      <h3>Age : {age}</h3>
      <p>Occupation : {occupation}</p>
      <h3>Location : {location}</h3>
    </li>
  );
};
