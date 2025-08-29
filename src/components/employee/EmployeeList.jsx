import React, { useContext } from 'react'
import { EmployeeContext } from './EmployeeContext'
import { em } from 'motion/react-client'

export const EmployeeList = () => {

    const {employees} = useContext(EmployeeContext)
  return (
    <div>
        <h1>LISt</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.city}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
