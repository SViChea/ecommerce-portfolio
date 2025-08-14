import { ColumnDef } from "@tanstack/react-table";
import DeleteAlart from "./DeleteAlart";
import Image from "next/image";
import { ProductType } from "@/types/productType";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

export const columnsCart: ColumnDef<ProductType>[] = [
  
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown />
        </Button>
      )
    },
  },
  {
    accessorKey: "images",
    header: "Image",
    cell: ({ getValue }) => (
      <Image
        src={getValue<string>()[0]}
        alt="Product Thumbnail"
        width={200}
        height={200}
        unoptimized
        className="w-12 h-12 object-cover rounded"
      />
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown />
        </Button>
      )
    },
  },
  {
    accessorKey: "category",
    header: "Category",
      cell: ({row}) => (
      row.original.category.name
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({getValue}) => (
      <p className="text-wrap">{getValue<string>()}</p> 
    )
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({getValue}) => (
      <p>{getValue<number>()}$</p>
    )
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({row}) => (
      <div className="flex gap-2 items-center">
        <DeleteAlart productId={row.original.id}/>
      </div>
    ),
  },
];
