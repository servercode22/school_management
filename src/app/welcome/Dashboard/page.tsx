// pages/dashboard.tsx

import Head from 'next/head';
import React from 'react';
// import { useQuery } from 'react-query';
// import axios from 'axios';

const Dashboard: React.FC = () => {
  // const router = useRouter();

//   // Example: Fetching school information
//   const { data: schoolInfo, isLoading, isError } = useQuery('schoolInfo', async () => {
//     const response = await axios.get('/api/school-info');
//     return response.data;
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

  return (
    <div>
      <Head>
        <title>School Dashboard</title>
      </Head>

      <div className="container mx-auto mt-14">
        <h1 className="text-2xl font-bold my-4">School Dashboard</h1>

        {/* Display School Information */}
        <div className="border p-4 my-4">
          <h2 className="text-xl font-bold mb-2">School Information</h2>
          {/* <p>School Name: {schoolInfo.name}</p>
          <p>Location: {schoolInfo.location}</p> */}
          {/* Add more school information as needed */}
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
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Manage Teachers
          </button>
          {/* Add more navigation buttons for other sections */}
        </div>

        {/* Other dashboard content */}
        {/* ...

          Customize and add more content based on your school system requirements.
          
        ... */}
      </div>
    </div>
  );
};

export default Dashboard;
