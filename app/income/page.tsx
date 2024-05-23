"use client"

import { useEffect, useState } from 'react';
import { Income, columns } from "./columns"
import { DataTable } from "./data-table"

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

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
