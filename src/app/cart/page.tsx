'use client'
import TableCartComponent from '@/components/cart/TableCartComponent'
import React, { useEffect, useState } from 'react'
import { columnsCart } from '../../components/cart/ColumnCart'
import { ProductCartType } from '@/types/cartType'

export default function page() {
  const [carts, setCarts] = useState<ProductCartType[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("https://dummyjson.com/carts/1")
      const data = await res.json()
      setCarts(data.products);
      console.log(data.products)
    }
    fetchCart()
  }, [])

  return (
    <TableCartComponent columns={columnsCart} data={carts} />
  )
}
