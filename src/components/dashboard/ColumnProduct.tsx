import { ColumnDef } from "@tanstack/react-table";
import DeleteAlart from "../cart/DeleteAlart";
import OpenEditDialog from "../cart/OpenEditDialog";
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
    cell: () => (
      <div className="flex gap-2 items-center">
        <OpenEditDialog />
        <DeleteAlart />
      </div>
    ),
  },
];
