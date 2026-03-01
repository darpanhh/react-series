import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    async function fetchUsers(){
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch api");
      }
      finally{
        setLoading(false);
      }
    }
    fetchUsers();
  },[])

  if(loading) return <h2>Loading....</h2>
  if(error) return <h2>{error}</h2>
  return (
    <div>
      <h1>User list</h1>
      {users.map((user)=>(
        <div key={user.id}>
          <p>Name:{user.name}</p>
          <p>Email:{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App
