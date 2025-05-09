import React from "react";

export const MapDemo3 = () => {
  var userData = [
    { name: "ram", age: 23, salary: 20000, gender: "male" },
    { name: "smart", age: 26, salary: 50000, gender: "male" },
    { name: "seeta", age: 22, salary: 22000, gender: "female" },
    { name: "jay", age: 30, salary: 75000, gender: "male" },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 3</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
            {
                userData.map((user)=>{
                    return <tr style={{backgroundColor:user.gender =="female" && "pink"}}>
                        <td style={{backgroundColor:user.name.startsWith("s") && "blue"}}>{user.name}</td>
                        <td>{user.age}</td>
                        <td style={{color:user.salary>30000 && "yellow"}}>
                            {/* <span style={{color:user.salary>30000 ? "yellow":"white"}}>{user.salary}
                            </span> */}
                            {/* <span style={{color:user.salary>30000 && "yellow"}}>
                                {user.salary}
                            </span> */}
                            {user.salary}
                        </td>
                        <td>{user.gender}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};
