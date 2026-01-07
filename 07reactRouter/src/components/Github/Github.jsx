import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//     const [data,setData] = useState([])
//   useEffect(()=>{
//     fetch('https://api.github.com/users/darpanhh')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         setData(data);
//     })
//   },[])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    <p>Github followers: {data.followers}</p>
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    <p>Name: {data.name}</p>
    <p>Following: {data.following}</p>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/darpanhh')
    return response.json()
}