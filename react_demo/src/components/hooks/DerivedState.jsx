const user = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Doe", age: 30 },
  { name: "Smith", age: 35 },
  { name: "Alex", age: 28 },
];

export const DerivedState = () => {
  return (
    <>
      <div className="main-div">
        <h1>Derived State</h1>
        const [users, setUsers] = useState(user);
      </div>
    </>
  );
};
