import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


export default function Header() {
    const [userData,setUserData]=useState([]);

    useEffect(()=>{
        async function fData(){
            const res= await axios.get("https://restcountries.com/v3.1/all")
            setUserData(res.data);
        }
        fData();

    },[])
    console.log(userData);
  return (
    <div className='grid grid-cols-3 gap gap-10 m-5 '>
      {userData.map((e)=>
      <div className='rounded-lg border-2 shadow-black' >
        <img className='object-cover w-[40vw] h-[300px] rounded-lg border-2' src={e.flags.svg}/>
        <h1 className='font-bold text-[1vw] text-center p-2'>{e.name.common}</h1>
        <p className='text-center  p-2'>Population:-{e.population}</p>
        <p className='text-center  p-2'>Region:-{e.region}</p>
        <p className='text-center  p-2'>Capital:-{e.capital}</p>
        </div>
      )}
    </div>
  )
}
