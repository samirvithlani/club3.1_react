import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    
    console.log("error",errors)
    const submitHandler  =(data)=>{
        console.log(data)
    }

    const validationSchema  ={
        ageValidator:{
          required:{
            value:true,
            message:"age is required*"
          },
          min:{
            value:18,
            message:"min age should be 18"
          },
          max:{
            value:60,
            message:"max age should be 60"
          }
        },
    }

    
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",{required:{value:true,message:"name is required*"}})}></input>
                {/* {
                    errors.name && errors.name.message
                } */}
                {
                    errors.name?.message
                }
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {
                    errors.age?.message
                }
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
