export const ListStateUp = () => {
  return (
    <>
      <InputComponent />
      <DisplayComponent />
    </>
  );
};

const InputComponent = () => {
  const [Input, setInput] = useState("My name is John Doe");
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
