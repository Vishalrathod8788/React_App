import studentData from "../api/studentData.json";

export const Icard = () => {
  return (
    <>
      <div>
        <p>Roll No. : {studentData[0].rollNumber}</p>
        <p>First Name : {studentData[0].firstName}</p>
        <p>Last Name : {studentData[0].lastName}</p>
        <p>Age : {studentData[0].age}</p>
        <p>Grade : {studentData[0].grade}</p>
        <p>IsPresent : {studentData[0].isPresent}</p>
      </div>
      <p>--------------------------</p>
      <div>
        <p>Roll No. : {studentData[1].rollNumber}</p>
        <p>First Name : {studentData[1].firstName}</p>
        <p>Last Name : {studentData[1].lastName}</p>
        <p>Age : {studentData[1].age}</p>
        <p>Grade : {studentData[1].grade}</p>
        <p>IsPresent : {studentData[1].isPresent}</p>
      </div>
      <p>--------------------------</p>
      <div>
        <p>Roll No. : {studentData[2].rollNumber}</p>
        <p>First Name : {studentData[2].firstName}</p>
        <p>Last Name : {studentData[2].lastName}</p>
        <p>Age : {studentData[2].age}</p>
        <p>Grade : {studentData[2].grade}</p>
        <p>IsPresent : {studentData[2].isPresent}</p>
      </div>
      <p>--------------------------</p>
      <div>
        <p>Roll No. : {studentData[3].rollNumber}</p>
        <p>First Name : {studentData[3].firstName}</p>
        <p>Last Name : {studentData[3].lastName}</p>
        <p>Age : {studentData[3].age}</p>
        <p>Grade : {studentData[3].grade}</p>
        <p>IsPresent : {studentData[3].isPresent}</p>
      </div>
      <p>--------------------------</p>
      <div>
        <p>Roll No. : {studentData[4].rollNumber}</p>
        <p>First Name : {studentData[4].firstName}</p>
        <p>Last Name : {studentData[4].lastName}</p>
        <p>Age : {studentData[4].age}</p>
        <p>Grade : {studentData[4].grade}</p>
        <p>IsPresent : {studentData[4].isPresent}</p>
      </div>
    </>
  );
};
