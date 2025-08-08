export type CartType = {
  id: number,
  products: [ProductCartType],
  total: number,
  discountedTotal: number,
  totalQuantity: number
}

export type ProductCartType = [{
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountTotal: number,
    thumbnail: string
}]