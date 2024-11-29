const IcardData = ({ IcardData }) => {
  const { rollNumber, firstName, lastName, age, grade, isPresent } = IcardData;
  return (
    <>
      <li>
        <p>Roll No. : {studentData[0].rollNumber}</p>
        <p>First Name : {studentData[0].firstName}</p>
        <p>Last Name : {studentData[0].lastName}</p>
        <p>Age : {studentData[0].age}</p>
        <p>Grade : {studentData[0].grade}</p>
        <p>IsPresent : {studentData[0].isPresent}</p>
      </li>
    </>
  );
};
