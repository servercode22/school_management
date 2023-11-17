"use client";


import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [formvalue, setFormvalue] = useState({ email: '', password: '' });
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  }

  const handleFormsubmit = async (e: any) => {
    e.preventDefault();

    if (!formvalue.email || !formvalue.password) {
      setError('Email and password are required.');
      return;
    } else {
      setError('');
    }

    try {
      
        const response = await fetch('https://www.demo.lms.crossdevlogix.com/api/user/login', {
        method: 'POST',
        body: JSON.stringify(formvalue),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // const r = await response.json();
      // console.log(r)

      if(response.ok){
        const {user}=await response.json()


        if(user?.user_type === "super_admin"){
          console.log("Go to super admin")
        }else if(user?.user_type === "admin"){
          console.log("Go to admin site")
        }
        router.push('/welcome');
      }
     
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center">
            <Image
              src="/Devlogix.png"
              alt="logo"
              width={80}
              height={80}
              
            />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Login to School of  Devlogix
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        



        <form className="shadow-md rounded px-8 pt-6 pb-8 mt-5 space-y-2" 
        onSubmit={handleFormsubmit}>

          <div className="grid w-full max-w-sm items-center gap-1.5">
           
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
              name='email'
              value={formvalue.email}
              onChange={handleInput}
            />
            
          </div>


          
          <div className="grid w-full max-w-sm items-center gap-1.5">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 
              px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name='password'
              value={formvalue.password}
              onChange={handleInput}
            />


          </div>
          {error && (
            <div className="mb-4 text-red-500">{error}</div>
          )}

          
          <div className="justify content-center">
          
           <button
              className="bg-black hover-bg-blue-950 text-white
               font-bold py-2 px-4 rounded focus:outline-none
                focus:shadow-outline"
              type="submit" 
            >
              Login
            </button>
          </div>
        </form>

        </div>
      </div>
    </>
  );
}