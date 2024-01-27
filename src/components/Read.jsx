import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';


function Read() {
    const [data, setData]=useState([]);

    function getData() {
        axios.get("https://65b3c2ae770d43aba47a5f08.mockapi.io/abc")
        .then((res)=>{
            setData(res.data);
        })
    }
    useEffect(()=>{
        getData()
    },[]);
    function handleDelete(id){
        axios.delete(`https://65b3c2ae770d43aba47a5f08.mockapi.io/abc/${id}`)
        .then(()=>
        getData())
        
    }
    const setToLocalStorage=(id, name, email)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
    }

  return (
    <>
    <div className='flex justify-between p-3 '>
        <h1 className='text-2xl font-semibold' >Details</h1>
        <Link 
        to={"/"}>
        <button className='text-white text-lg bg-sky-600 rounded-lg px-4 py-2 font-mono font-bold'>+ add</button>
        </Link>
    </div>
<div className="relative overflow-x-auto rounded-xl">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                S.no
            </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>     
            </tr>
        </thead>
        {
            data.map((eachData)=>{
                return (<>
                    <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">
                    {eachData.id}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {eachData.name}
                </th>
                <td className="px-6 py-4">
                    {eachData.email}
                </td>
                <td className="px-6 py-4">
                    <div className='space-x-1'>
                    <Link to="/update">
                    <button className='px-4 bg-sky-500 text-white text-m hover:bg-sky-700 py-2 rounded-md '
                    onClick={()=>
                    setToLocalStorage(eachData.id,eachData.name,eachData.email)}> Edit</button>
                    </Link>
                    <button className='px-3 bg-sky-500 text-white text-m hover:bg-sky-700 py-2 rounded-md ' 
                    onClick={()=>
                    handleDelete(eachData.id)}> Delete</button>
                    </div>
                    
                </td>
            </tr>
        </tbody>
                </>)
            })
            }
    </table>
</div>
</>

  )
}

export default Read
