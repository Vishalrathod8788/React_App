export const PersonalData = ({ data }) => {
  const { name, age, occupation, location } = data;
  return (
    <li>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Occupation : {occupation}</p>
      <p>Location : {location}</p>
    </li>
  );
};
