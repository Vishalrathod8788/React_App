export const ProfileCard = ({ data }) => {
  const { name, age, greeting, hobbies } = data;
  return (
    <li>
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
      <p>Greeting : {greeting}</p>
      <p>Hobbies : {hobbies}</p>
    </li>
  );
};
