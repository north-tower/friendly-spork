import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

function Invoice(){
  return (
    <div className="">
  <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
     <a href="#" className="text-2xl font-bold text-gray-800">Invoices</a>
     <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <div className="relative">
           
          </div>
        </div>
  </div>
  <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Order Summary</p>

       
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      {/* <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span className="float-right text-gray-400">42EU - 8.5US</span>
          <p className="text-lg font-bold">KES138.99</p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span className="float-right text-gray-400">42EU - 8.5US</span>
          <p className="mt-auto text-lg font-bold">KES238.99</p>
        </div>
      </div> */}
      <div className="mt-10 bg-white px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Invoice Details</p>
    <p className="text-gray-400">Complete your invoice by providing the invoice details.</p>
    <div className="">
      
      <label  className="mt-4 mb-2 block text-sm font-medium">Invoice Description</label>
      <div className="relative">
        <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase
         shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Description" />
        
      </div>
      <label  className="mt-4 mb-2 block text-sm font-medium">Invoive Amount</label>
      <div className="relative">
        <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter Address here" />
        
      </div>  
    </div><div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Customer Details</p>
    <p className="text-gray-400">Complete your invoice by providing the customer details.</p>
    <div className="">
      
      <label  className="mt-4 mb-2 block text-sm font-medium">Customer Name</label>
      <div className="relative">
        <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="full name here" />
        
      </div>
     
  
    </div>
    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Create Invoice</button>
  </div>

    {/* <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Create Invoice</button> */}
  </div>
    </div>

   
  </div>
 
</div>
  </div>
  )

}

export default Invoice;