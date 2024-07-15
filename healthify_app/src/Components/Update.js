import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function Update() {
    const { userId } = useParams('userId')
    const {register, handleSubmit,setValue} = useForm()
    const nav = useNavigate()


    function getData(){
        axios.get(`http://localhost:3030/user/${userId}`).then(result=>{
            setValue('name', result.data.name)
            setValue('fee', result.data.fee)
            setValue('date', result.data.date)
            setValue('time', result.data.time)
        }).catch((error)=>{
            console.log(error)
        })

    }

    useEffect(()=>{
        getData()},[])
    
    function updateAppointment(data){
        axios.put(`http://localhost:3030/user/${userId}`,data).then(response=>{
            console.log(response)
            nav('/data')
        })
    }
    
  return (
   
    <form className='form-class' onSubmit={handleSubmit(saveData)}>
    <div>
        <label>Doctor Name</label>
        <input type='text' {...register('name')} />
    </div>

    <div>
        <label>Consultancy Fee</label>
        <input type='Number' {...register('fee')}/>
    </div>


    <div>
        <label>appointment Date</label>
        <input type='date' {...register('date')}/>
    </div>

    <div>
        <label>Appointment time</label>
        <input type='time' {...register('time')}/>
    </div>

   <div>
        <button type='submit'>Submit</button>
   </div>
</form>
  )
}

export default Update