import React from "react";

export default function Content() {
  var age = 20;
  var sName = "Ram";
  var isActive = false;

  var user = {
    id: 1001,
    name: "Kunal",
    age: 20,
  };
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1>CONTENT</h1>
      <h1>HELLO</h1>
      <h1>AT A TIME WE CAN RETURN 1 tag only...</h1>
      <p>EVERY TAG MUST HAVE CLOSING TAG</p>
      <p>at a time 1 tag must return</p>
      <h1>NAME = {sName}</h1>
      <h1>Age = {age}</h1>
      <h3>Active ??? {isActive == true ? "Active" : "Not Active"}</h3>
      {user.id}
      {user.name}
      {user.age}
    </div>
  );
}
