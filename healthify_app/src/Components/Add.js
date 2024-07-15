import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'


function Add() {

    const {register, handleSubmit} = useForm()

    function saveData(data){
        axios.post('http://localhost:3030/user', data)

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

export default Add