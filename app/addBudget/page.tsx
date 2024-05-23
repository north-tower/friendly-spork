'use client'

import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react'

interface Category {
    id: string;
    name: string;
    budget: string;
}


function Page() {
    const [newCategory, setNewCategory] = useState<Category>({id: '', name: '', budget: ''});

    const handleCategory = async (e: FormEvent) => {
        e.preventDefault();
        try {
          await axios.post('https://supreme-goggles-beta.vercel.app/api/v1/addCategory', newCategory);
          // Display success message
          window.alert('Expense added successfully');
          // Redirect to Drivers page
          window.location.reload();
       
        } catch (error) {
          console.error('Error adding new driver:', error);
        }
      };

      const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewCategory(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
  return (
    <div>
        <p className="mt-4 pl-4 text-xl font-bold">Add Budget</p>
            <div className="flex flex-col items-center px-8 py-10">
            <form onSubmit={handleCategory}>
                <label className="block w-full">
                  <p className="mb-1 text-sm text-gray-600">Enter Category Name</p>
                  <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                     id="name"
                     name="name"
                     value={newCategory.name}
                     onChange={handleCategoryChange}
                  type="text" placeholder="Enter Category Name" />
                </label>
                <label className="block w-full">
                  <p className="mb-1 text-sm text-gray-600">Enter Category Budget</p>
                  <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                   id="budget"
                   name="budget"
                   value={newCategory.budget}
                   onChange={handleCategoryChange}
                  type="text" placeholder="Enter Category Budget" />
                </label>
               
                <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <button className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">Add Category</button>
              </div>
              </form>

            </div>
    </div>
  )
}

export default Page