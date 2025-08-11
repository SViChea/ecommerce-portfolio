'use client'
import TableCartComponent from '@/components/cart/TableCartComponent'
import React from 'react'
import { columnsCart } from '../../components/cart/ColumnCart'

export default function page() {
  return (
    <TableCartComponent columns={columnsCart} />
  )
}
