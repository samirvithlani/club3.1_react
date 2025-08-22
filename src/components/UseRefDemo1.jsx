import React, { useEffect, useRef } from 'react'

export const UseRefDemo1 = () => {
    //useref --> dom --property access man -- withou rerendering component...
    const inputref = useRef(null) // {current:null}
    useEffect(() => {
      
        inputref.current.focus()
      
    }, [])
    
  return (
    <div style={{textAlign:'center'}}>
        <h1>USE REF</h1>
        <div>
            <label>NAME</label>
            <input type="text" ref={inputref} />
        </div>
        <div>
            <label>AGE</label>
            <input type="text" />
        </div>
    </div>
  )
}
