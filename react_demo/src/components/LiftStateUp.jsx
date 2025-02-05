export const ListStateUp = () => {
  const [Input, setInput] = useState("My name is John Doe");
  return (
    <>
      <InputComponent />
      <DisplayComponent />
    </>
  );

  const InputComponent = () => {
    return (
      <>
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setInput("")}>Clear</button>
      </>
    );
  };

  const DisplayComponent = () => {
    return (
      <>
        <h1>{Input}</h1>
      </>
    );
  };
};
