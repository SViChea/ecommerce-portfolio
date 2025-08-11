"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ProductCartType } from "@/types/cartType";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
}

export default function TableCartComponent<TValue>({
  columns,
}: DataTableProps<ProductCartType, TValue>) {
  const [carts, setCarts] = useState<ProductCartType[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("https://dummyjson.com/carts/1")
      const data = await res.json()
      setCarts(data.products);
    }
    fetchCart()
  }, [])

  const table = useReactTable({
    columns,
    data: carts,
    getCoreRowModel: getCoreRowModel(),
  });

  
  
  return (
    <div className="overflow-hidden rounded-md border mx-[120px] mt-5">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
