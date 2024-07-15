import {React, useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


function Data() {
    const [allData, setUsers] = useState([])

    async function getAllUsers(){
        const users = await axios.get(' http://localhost:3030/user')
        const result = await users.data
        setUsers(result)
    }

    useEffect(()=>{
    getAllUsers();},[])
  return (
    <table className='table table-hover'>
        <thead>
            <tr>
                <th>Doctor Name</th>
                <th>Consultancy name</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Current Status</th>
                <th>Action</th>
                <th>Update</th>
            </tr>
        </thead>
        <tbody>
            {
            allData.map((users)=>{
            return(
                <tr>
                    <td>{users.name}</td>
                    <td>{users.fee}</td>
                    <td>{users.date}</td>
                    <td>{users.time}</td>
                    <td></td>
                    <td></td>
                    <td>
                        <NavLink to={`/update/${users.id}`} >Update</NavLink>
                    </td>
                    
                </tr>
                
            )})
            }
        </tbody>
        
     </table>
  )
}

export default Data