
import { useState } from 'react';

const CreateBusiness = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    landmark: '',
    city: '',
    country: '',
    state: '',
    user_details: {
      name: '',
      email: '',
      password: '',
      user_type: 'admin',
    },
  });
  const [error, setError] = useState('');


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUserDetailsInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      user_details: {
        ...prevValues.user_details,
        [name]: value,
      },
    }));
  };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://www.demo.lms.crossdevlogix.com/api/business/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formValues),
//       });

//       if (response.ok) {
        
//         const result = await response.json();
//         console.log('Business created successfully:', result);
       
//       } else {
//         const errorMessage = await response.text();
//         setError(`Failed to create business: ${errorMessage}`);
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//       setError('An unexpected error occurred.');
//     }
//   };

  return (
    <div className="min-h-screen flex items-center justify-center mt-5">
      {/* <form className="w-full max-w-md" onSubmit={handleSubmit}> */}
      <form className="w-full max-w-md mt-5" >
        {/* Your form fields go here */}
        {/* Example: */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 mt-8">
            Business Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
  <label htmlFor="landmark" className="block text-gray-700 text-sm font-bold mb-2">
    Landmark
  </label>
  <input
    type="text"
    id="landmark"
    name="landmark"
    value={formValues.landmark}
    onChange={handleInput}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
    City
  </label>
  <input
    type="text"
    id="city"
    name="city"
    value={formValues.city}
    onChange={handleInput}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
    Country
  </label>
  <input
    type="text"
    id="country"
    name="country"
    value={formValues.country}
    onChange={handleInput}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
    State
  </label>
  <input
    type="text"
    id="state"
    name="state"
    value={formValues.state}
    onChange={handleInput}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label htmlFor="user_name" className="block text-gray-700 text-sm font-bold mb-2">
    User Name
  </label>
  <input
    type="text"
    id="user_name"
    name="user_details.name"
    value={formValues.user_details.name}
    onChange={handleUserDetailsInput}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label htmlFor="user_email" className="block text-gray-700 text-sm font-bold mb-2">
    User Email
  </label>
  <input
    type="email"
    id="user_email"
    name="user_details.email"
    value={formValues.user_details.email}
    onChange={handleUserDetailsInput}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />

</div>
<div className="mb-4">
  <label htmlFor="user_password" className="block text-gray-700 text-sm font-bold mb-2">
    User Password
  </label>
  <input
    type="password"
    id="user_password"
    name="user_details.password"
    value={formValues.user_details.password}
    onChange={handleUserDetailsInput}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>


        {/* {error && <div className="text-red-500 mb-4">{error}</div>} */}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Business
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBusiness;
