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
  <div> <label className="block w-full">From:</label>
      <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover></div>

  <div>
  <label className="block w-full">To:</label>
      <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
  </div>
</div>
      <div className='container mx-auto py-5'>
       
        
      </div>
      <div className='container mx-auto py-5'>
        <label className="block w-full">From:</label>
      <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        
      </div>
       <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
   
  )
}
