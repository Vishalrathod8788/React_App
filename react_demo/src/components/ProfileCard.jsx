import data from "../api/profileData.json";
export const ProfilesCard = () => {
  return (
    <div>
      <div>
        <p>Name : {data.profiles[0].name}</p>
        <p>Age : {data.profiles[0].age}</p>
        <p>Occupation : {data.profiles[0].occupation}</p>
        <p>Location : {data.profiles[0].location}</p>
      </div>
      <p>---------------------------------</p>
      <div>
        <p>Name : {data.profiles[1].name}</p>
        <p>Age : {data.profiles[1].age}</p>
        <p>Occupation : {data.profiles[1].occupation}</p>
        <p>Location : {data.profiles[1].location}</p>
      </div>
      <p>---------------------------------</p>
      <div>
        <p>Name : {data.profiles[2].name}</p>
        <p>Age : {data.profiles[2].age}</p>
        <p>Occupation : {data.profiles[2].occupation}</p>
        <p>Location : {data.profiles[2].location}</p>
      </div>
      <p>---------------------------------</p>
      <div>
        <p>Name : {data.profiles[3].name}</p>
        <p>Age : {data.profiles[3].age}</p>
        <p>Occupation : {data.profiles[3].occupation}</p>
        <p>Location : {data.profiles[3].location}</p>
      </div>
      <p>---------------------------------</p>
      <div>
        <p>Name : {data.profiles[4].name}</p>
        <p>Age : {data.profiles[4].age}</p>
        <p>Occupation : {data.profiles[4].occupation}</p>
        <p>Location : {data.profiles[4].location}</p>
      </div>
    </div>
  );
};
