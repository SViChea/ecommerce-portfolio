import { ProductCartType } from "@/types/cartType";
import { ColumnDef } from "@tanstack/react-table";
import DeleteAlart from "./DeleteAlart";
import OpenEditDialog from "./OpenEditDialog";
import Image from "next/image";

export const columnsCart: ColumnDef<ProductCartType>[] = [
  {
    accessorKey: "thumbnail",
    header: "Image",
    cell: ({ getValue }) => (
      <Image
        src={getValue<string>()}
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
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "discountPercentage",
    header: "Discount",
  },
  {
    accessorKey: "discountedTotal",
    header: "Total Price",
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
