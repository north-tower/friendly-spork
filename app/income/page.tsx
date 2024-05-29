"use client"

import { useEffect, useState } from 'react';
import { Income, columns } from "./columns"
import { DataTable } from "./data-table"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from 'react';

async function fetchData() {
  try {
    const response = await fetch('https://supreme-goggles-beta.vercel.app/api/v1/getIncome');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Income[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return [];
  }
}

export default function DemoPage() {
  const [data, setData] = useState<Income[]>([]);
  const [date, setDate] = React.useState<Date>()

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 container mx-auto py-5">
        <div> 
          <label className="block w-full">From:</label>
          <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                     
                  type="date" placeholder="Enter Category Name" />
        </div>

  <div>
  <label className="block w-full">To:</label>
     
  </div>
  <div className='m-3'>
  <button className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">Fetch Data</button>

  </div>
</div>
      
      
       <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
   
  )
}
