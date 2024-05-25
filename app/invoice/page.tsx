import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

function Invoice() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-0">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <a href="#" className="text-2xl font-bold text-gray-800">Invoices</a>
        </div>
        <div className="flex flex-col sm:px-10 lg:px-20 xl:px-32 my-10 space-y-10">
          <div className="px-4 pt-4">
            <div className="mt-0 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div className="bg-white px-4 pt-0">
                <p className="text-xl font-medium">Invoice Details</p>
                <p className="text-gray-400">Complete your invoice by providing the invoice details.</p>
                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium">Invoice Description</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="invoice-description"
                      name="invoice-description"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium">Invoice Amount</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="invoice-amount"
                      name="invoice-amount"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Amount"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 pt-2">
            <p className="text-xl font-medium">Customer Details</p>
            <p className="text-gray-400">Complete your invoice by providing the customer details.</p>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium">Customer Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="customer-name"
                  name="customer-name"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Full name"
                />
              </div>
            </div>
            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Create Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
