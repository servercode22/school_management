



// pages/dashboard.tsx

import Head from 'next/head';
import React from 'react';
// import { useQuery } from 'react-query';
// import axios from 'axios';

const  Admin: React.FC = () => {
 

  return (
    <div className='mt-8'>
      <Head>
        <title>School Dashboard</title>
      </Head>

      <div className="container mx-auto  mt-10 ">
       
        <h1 className="text-2xl font-bold my-4 ">School Dashboard</h1>

        {/* Display School Information */}
        <div className="border p-4 my-4">
          <h2 className="text-xl font-bold mb-2">School Information</h2>
        
        </div>

        {/* Navigation to different sections */}
        <div className="flex">
          <button
            // onClick={() => router.push('/dashboard/students')}
            className="bg-blue-500 text-white px-4 py-2 mr-4 rounded-md"
          >
            Manage Students
          </button>
          <button
            // onClick={() => router.push('/dashboard/teachers')}
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Manage Teachers
          </button>
          {/* Add more navigation buttons for other sections */}
        </div>

     
      </div>
    </div>
  );
};

export default  Admin;
