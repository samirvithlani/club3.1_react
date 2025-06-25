import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const FormDemo4 = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues:{
        medicin:[{name:"",dosage:0,frequency:0}]
    }
  })

  const { fields, append, remove } = useFieldArray({
    name: "medicin",
    control,
  });

  const submitHandler = (data)=>{

    console.log(data)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FOrm Demo 4</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        {
            fields.map((filed,index)=>{
                return<div>
                    <div>
                        <label>MEDICIN NAME</label>
                        <input type="text" {...register(`medicin.${index}.name`)}></input>
                    </div>
                    <div>
                        <label>DOSAGE</label>
                        <input type="text" {...register(`medicin.${index}.dosage`)}></input>
                    </div>
                    <div>
                        <label>FREQUENCY</label>
                        <input type="text" {...register(`medicin.${index}.frequency`)}></input>
                    </div>
                    
                </div>
            })
        }
        <div>
                        <input type="submit"></input>
        </div>
      </form>
      <div>
        <button style={{marginRight:"200px"}} onClick={()=>{append([{name:"",dosage:0,frequency:0}])}}>ADD MORE</button>
      </div>
    </div>
  );
};
