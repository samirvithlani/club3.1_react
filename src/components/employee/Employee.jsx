import React, { useState } from "react";
import { EmployeeContext } from "./EmployeeContext";
import { EmployeeList } from "./EmployeeList";

export const Employee = () => {

  const [employees, setemployees] = useState([
    { id: 1, name: "ram", age: 23, city: "ahmedabad" },
    { id: 2, name: "parth", age: 24, city: "ahmedabad" },
    { id: 3, name: "kunal", age: 25, city: "mumbai" },
  ]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>EMPLOYEE</h1>
      <EmployeeContext.Provider value={{employees}}>
            <EmployeeList></EmployeeList>
      </EmployeeContext.Provider>
    </div>
  );
};
