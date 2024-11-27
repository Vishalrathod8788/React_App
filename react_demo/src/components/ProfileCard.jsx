// Create new component profile card without using CSS ans Simple Information like Name, age, greeting, hobbies so on
// File path: /home/vishal/React_App/react_demo/src/components/ProfileCard.jsx
// Content:
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
