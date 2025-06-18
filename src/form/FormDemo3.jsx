import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

    //required
    //min
    //max
    //minLength
    //max......
    //validate
    //pattern
    const {register,handleSubmit,formState:{errors}}=useForm({mode:"onBlur"})
    const submitHandler=(data)=>{
        console.log(data)
    }
    var refcodes=["royal","dhiraj","jagrut","mihir"]
    const validationSchema = {
        refCodeValidator:{
            required:{
                value:true,
                message:"ref code is required..."
            },
            validate:(value)=>{

                return refcodes.includes(value) || "value must be royal.."
            }
        },
        phonnovalidation:{
            required:{
                value:true,
                message:"phone no is required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"invalid phone..."
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>REF CODE</label>
                <input type='text' {...register("refcode",validationSchema.refCodeValidator)}></input>
                {
                    errors.refcode?.message
                }
            </div>
            <div>
                <label>PHONE NO</label>
                <input type='text' {...register('phoneno',validationSchema.phonnovalidation)}></input>
                {
                    errors.phoneno?.message
                }
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
