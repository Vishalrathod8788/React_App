export const Prectice = () => {
  const Students = [1];
  return (
    <>
      <h1> Interview </h1>
      {/* <p>{Students.length && "Students Not Found"}</p> */}
      <p>Number Of Students : {Students.length}</p>
      {/* Solution : React Doesn't render anything if the condition is false 
      it mean our answer is come to 0 so React doesn't anything print */}
      <p>
        Number Of Students : {Students.length === 0 && "Students Not Found"}{" "}
        {/* It mean this is return Falsy Value
        so Dose not print anything */}
      </p>

      {/* Solution 1: */}
      <p>
        Number Of Students : {Students.length != 0 ? "Students Not Found" : 0}
      </p>

      {/* Solution 2: */}
      <p>Number Of Students : {Students.length || 0}</p>
    </>
  );
};
