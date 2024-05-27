import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import axios from 'axios';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Invoice = {
  id: string;
  description: string;
  amount: string;
  status: string;
  name: string;
  timestamp: {
    _seconds: number;
    _nanoseconds: number;
  };
};

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "timestamp",
    header: () => <div className="text-right">Timestamp</div>,
    cell: ({ row }) => {
      const timestamp = row.getValue("timestamp");
      const milliseconds = timestamp._seconds * 1000 + Math.floor(timestamp._nanoseconds / 1000000);
      const date = new Date(milliseconds);
      const formatted = date.toLocaleString(); // or use date.toISOString() or a custom format

      return <div className="text-right font-medium">{formatted}</div>;
    },
  
  },
  {
    accessorKey: "name",
    header: "Customer Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const invoice = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={async () => {
                try {
                  // Perform the PUT request
                  const response = await axios.put(`https://supreme-goggles-beta.vercel.app/api/v1/updateInvoice/${invoice.id}`);

                  // Redirect to a new URL if the PUT request was successful
                  window.alert('Invoice updated successfully');
                  window.location.reload();
                } catch (error) {
                  console.error('Failed to update invoice:', error);
                  alert('Failed to update invoice. Please try again.');
                }
              }}
            >
              Pay
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
