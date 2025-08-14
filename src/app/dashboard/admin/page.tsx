'use client'
import { columnsCart } from '@/components/dashboard/ColumnProduct'
import TableCartComponent from '@/components/dashboard/TableCartComponent'
import { useGetAllProductsQuery } from '@/redux/services/products/productsApi';
import { ProductType } from '@/types/productType';

export default function AdminPage() {
    const { data: product, isLoading } = useGetAllProductsQuery();
  
    if(isLoading){
      return <div>loading...</div>
    }
    const items = (product as ProductType[]) || [];
    console.log(items)  
  return (
    <TableCartComponent columns={columnsCart} data={items}/>
  )
}
