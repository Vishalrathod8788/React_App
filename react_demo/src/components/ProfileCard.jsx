import PersonalData from "../api/profileData.json";
import {P}

export const ProfilesCard = () => {
  return (
    <>
      <ul>
        {PersonalData.map((curEle) => {
          return <PersonalData key={curEle.id} data={curEle} />;
        })}
      </ul>
    </>
  );
};
