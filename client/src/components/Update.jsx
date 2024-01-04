import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState(0);
    const [error,setError]=useState("");

    const {id}=useParams();
    const navigate =useNavigate();

    // here data come and edited
   const getSingleUser=async()=>{
    const response=await fetch(`http://localhost:8000/${id}`);
    const result=await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {

     setError("");
     console.log(result);
     setAge(result.age);
     setEmail(result.email);
     setName(result.name);
    }
   }
   useEffect(()=>{
    getSingleUser();
   },[]);


   // now its go to server the edited data
     const handleUpdate= async(e)=>{
      e.preventDefault();

      const updatedUser={name,email,age};
      const response=await fetch(`http://localhost:8000/${id}`,{
        method: 'PATCH',
        body:JSON.stringify(updatedUser),
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
       setError("");
        navigate('/all');
      }

     }




  return (
    <div className='container my-2'>
    {error && <div class="alert alert-danger" >{error}</div>}
 


   <h2 className='text-center'> Edit The Data</h2>
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

 <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Submit</button>
</form>
     
   </div>
  )
}

export default Update
