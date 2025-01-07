import axios from 'axios'
import { useState } from 'react'
import './create.css';


const Create = () => {

    const [name,setName] = useState('')
    const [weight,setWeight] = useState('')



    const sendData = async(e) =>{
    e.preventDefault()
    await axios.post('https://6777b13980a79bf9190296e8.mockapi.io/cakeshop/cake',{name:name,weight:weight})
    alert('Your order is Placed succesfully')
    }




  return (
    <div>
        <h1>Create Information</h1>

        <form onSubmit={sendData}>
            
            <input type='text' placeholder='Enter Your Cake Name' onChange={(e)=>{setName(e.target.value)}}/>
            <br/>
            <br/>
            <input type='text' placeholder='Enter Your Cake Weight (In kg/gm)' onChange={(e)=>{setWeight(e.target.value)}}/>
            <br/>
            <br/>
            <input type='submit' value={'Place Order 🛒'} />
        </form>
    </div>
  )
}

export default Create