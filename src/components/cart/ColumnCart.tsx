import { ProductCartType } from "@/types/cartType";
import { ColumnDef } from "@tanstack/react-table";
import DeleteAlart from "./DeleteAlart";
import OpenEditDialog from "./OpenEditDialog";

export const columnsCart: ColumnDef<ProductCartType>[] = [
  {
    accessorKey: "thumbnail",
    header: "Image",
    cell: ({ getValue }) => (
      <img
        src={getValue<string>()}
        alt="Product Thumbnail"
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
