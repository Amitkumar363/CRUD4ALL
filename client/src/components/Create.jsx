import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState(0);
    const [error,setError]=useState("");
    console.log(name,email,age);
    const navigate=useNavigate();

 const handleSubmit=async(e)=>{
  e.preventDefault();

  const addUser={name,email,age};
  const response=await fetch('http://localhost:8000',{
    method: 'POST',
    body:JSON.stringify(addUser),
    headers:{
      "Content-Type":"application/json",
    }
  });

  const result=await response.json();
  if(!response.ok){
    console.log(result.error);
    setError(result.error);
  }
  if(response.ok){
    console.log(result);
    setError("");
    setAge(0);
    setEmail("");
    setName("");
    navigate('/all');
  }

 }


  return (
    <div className='container my-2'>
     {error && <div class="alert alert-danger" >{error}</div>}
  


    <h2 className='text-center'> Enter the data</h2>
    <form >
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className="mb-3"> 
  <label  className="form-label">Email</label>
    <input type="email" className="form-control" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
    <div  className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3"> 
  <label  className="form-label">Age</label>
    <input type="number" className="form-control"value={age} placeholder='Age' onChange={(e)=>setAge(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
      
    </div>
  )
}

export default Create
