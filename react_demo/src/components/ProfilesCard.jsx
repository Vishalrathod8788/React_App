const ProfilesCard = ({ name, age, greeting, hobbies }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg"
        height="200"
        width="200"
        style={{ padding: "0px", margin: "0px" }}
        alt={`Avatar of ${name}`}
        className="w-48 h-48 rounded-full mt-4"
      />

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Age:</span> {age}
          </p>
          <p>
            <span className="font-semibold">Greeting:</span> {greeting}
          </p>
          <div>
            <span className="font-semibold">Hobbies:</span>
            <ul className="list-disc list-inside mt-1">
              {hobbies?.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesCard;
