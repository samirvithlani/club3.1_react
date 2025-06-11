import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
    const{register,handleSubmit}=useForm()
    const [data, setdata] = useState({})
    const [isSubbmited, setisSubbmited] = useState(false)
    //register -->ibject
    //handleSubmit function
    const submitHandler= (data)=>{

            console.log(data)
            setdata(data)
            setisSubbmited(true)
    }
  return (
    <div
      style={{
        textAlign: "center",
        color: "black",
        height: "auto",
        width: "100%",
        backgroundColor: "whitesmoke",
        border: "1px solid",
      }}
    >
      <h1>FormDemo1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>NAME</label>
            <input type="text" {...register("name")}></input>
        </div>
        <div>
            <label>AGE</label>
            <input type="text" {...register("age")}></input>
        </div>
        <div>
            <label>GENDER</label><br></br>
            MALE<input type="RADIO" value="male" {...register("gender")}></input><br></br>
            FEMALE<input type="RADIO" value="female" {...register("gender")}></input><br></br>
        </div>
        <div>
            <label>HOBBIES</label><br></br>
            SPORTS <input type="checkbox" {...register("hobbies")} value="sports"></input><br></br>
            TRAVEL <input type="checkbox" {...register("hobbies")} value="TRAVEL"></input><br></br>
            HIKING <input type="checkbox" {...register("hobbies")} value="hikinng"></input><br></br>
        </div>

        <div>
            <input type="submit"></input>
        </div>
      </form>
      {
        isSubbmited && <div>
        <h1>OUTPUT</h1>
        <h1>NAME = {data.name}</h1>
        <h2>HOBBIES</h2>
        <ul>
          {
            data.hobbies.map((h)=>{
              return <li>{h}</li>
            })
          }
        </ul>
      </div>
      }
      
    </div>
  );
};
