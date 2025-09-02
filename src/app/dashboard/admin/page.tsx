"use client";
import { columnsCart } from "@/components/dashboard/ColumnProduct";
import TableCartComponent from "@/components/dashboard/TableCartComponent";
import { useGetAllProductsQuery } from "@/redux/services/products/productsApi";
import { ProductType } from "@/types/productType";

function Data(): ProductType[] {
  const { data: product } = useGetAllProductsQuery();
  const items = (product as ProductType[]) || [];
  console.log(items);
  return items;
}

export default function page() {
  return <TableCartComponent columns={columnsCart} data={Data()} />;
}
