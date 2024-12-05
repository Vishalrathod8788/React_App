import styled from "styled-components";
import style from "./Profile.module.css";

export const PersonalCard = ({ data }) => {
  const { name, age, occupation, location } = data;
  const { rating } = data;
  const ButtonVishu = styled.button`
    background-color: red;
    color: white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
  `;

  // const ButtonThapa = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

  return (
    <li className={style.card}>
      <h1 className={style["card-content"]}>Name : {name}</h1>
      <h3>Age : {age}</h3>
      <p>Occupation : {occupation}</p>
      <h3>Location : {location}</h3>
      <ButtonVishu>Contact</ButtonVishu>
    </li>
  );
};
