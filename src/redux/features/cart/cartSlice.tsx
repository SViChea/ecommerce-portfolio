import { items } from "@/components/sidebar/sidebarMenu"
import { ProductType } from "@/types/productType"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type CartItems = {
    id: number,
    title: string,
    price: number,
    image: string,
    quantity: number
}

type CartState = {
    items: CartItems[],
    total: number,
    itemsCount: number
}

const initialState: CartState = {
    items: [],
    total: 0,
    itemsCount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductType>) => {
            const product = action.payload
            const existingItem = state.items.find((item) => item.id === product.id)

            if(existingItem){
                existingItem.quantity += 1;
            }else {
                state.items.push({
                    id: product.id,
                    title: product.title,
                    image: product.images[0],
                    price: product.price,
                    quantity: 1
                })
            }
            cartSlice.caseReducers.calculateTotal(state)
        },
        removeFromCart: (state, action: PayloadAction<CartItems>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
            cartSlice.caseReducers.calculateTotal(state)
        },
        calculateTotal: (state) => {
            state.itemsCount = state.items.reduce((total, item) => total + item.quantity, 0)
            state.total = state.items.reduce((total, item) => total + item.quantity * item.price,0)
        },
        addQuantity: (state, action: PayloadAction<CartItems>) => {
            const product = action.payload
            const existingItem = state.items.find((item) => item.id === product.id)

            if(existingItem){
                existingItem.quantity += 1
            }
            cartSlice.caseReducers.calculateTotal(state)
        },
        minusQuantity: (state, action: PayloadAction<CartItems>) => {
            const product = action.payload
            const existingItem = state.items.find((item) => item.id === product.id)

            
            if(existingItem){
                existingItem.quantity -= 1

                if(existingItem.quantity == 0){
                    cartSlice.caseReducers.removeFromCart(state, action)
                }
            }
            cartSlice.caseReducers.calculateTotal(state)
        },
        inputQuantity: (state, action: PayloadAction<{product: CartItems, quantity: number}>) => {
            const {product, quantity} = action.payload
            const existingItem = state.items.find((item) => item.id === product.id)

            if(existingItem){
                existingItem.quantity = quantity
            }
            cartSlice.caseReducers.calculateTotal(state)
        }
    }
})
export const {addToCart, removeFromCart, addQuantity, minusQuantity, inputQuantity} = cartSlice.actions
export default cartSlice.reducer;