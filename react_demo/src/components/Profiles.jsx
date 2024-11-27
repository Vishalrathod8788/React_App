import ProfilesCard from './ProfilesCard';

export const Profiles = () => {
  return (
    <div>
      <h1>Profiles Card</h1>
      <ProfilesCard
        name="Vishal"
        age={20}
        greeting="Hi there"
        hobbies={["Reading", "Gaming", "Coding"]}
      />
    </div>
  );
};
