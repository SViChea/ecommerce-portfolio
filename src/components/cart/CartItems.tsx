import { addQuantity, inputQuantity, minusQuantity, removeFromCart } from "@/redux/features/cart/cartSlice";
import type { CartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import DeleteAlart from "./DeleteAlart";

export default function CartItems() {
  const { items, total} = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveCart = (e: React.MouseEvent, product: CartItems) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
  };

  const handleAddQuantity = (e: React.MouseEvent, product: CartItems) => {
    e.preventDefault();
    dispatch(addQuantity(product));
  };

  const handleMinusQuantity = (e: React.MouseEvent, product: CartItems) => {
    e.preventDefault();
    dispatch(minusQuantity(product));
  };

  const handleInputQuantity = ( products: CartItems, input:number,) => {
    dispatch(inputQuantity({product: products, quantity: input}))
  };

  return (
    <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-[120px]">
      <h1 className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]">
        My Shopping Cart
      </h1>
      <div className="flex items-start mt-8 gap-6">
        <div className="bg-white p-4 rounded-xl w-full">
          <table className="w-full bg-white rounded-xl">
            <thead>
              <tr className="text-center border-b border-gray-400 w-full text-[#7f7f7f] text-sm font-medium uppercase leading-[14px] tracking-wide">
                <th className="text-left px-2 py-2">Product</th>
                <th className="px-2 py-2">price</th>
                <th className="px-2 py-2">Quantity</th>
                <th className="px-2 py-2">Subtotal</th>
                <th className="w-7 px-2 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((cart) => (
                <tr key={cart.id} className="text-center">
                  <td className="px-2 py-2 text-left align-top">
                    <Image
                      height={50}
                      width={50}
                      unoptimized
                      src={cart.image}
                      alt="test"
                      className="w-[100px] mr-2 inline-block h-[100px]"
                    />
                    <span>{cart.title}</span>
                  </td>
                  <td className="px-2 py-2">${cart.price}</td>
                  <td className="p-1 mt-9 bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex">
                    <Button onClick={(e) => handleMinusQuantity(e, cart)} className="text-black bg-transparent shadow-none hover:bg-transparent"><Minus /></Button>
                    <input
                            type="number"
                            value={cart.quantity}
                            onChange={(e) => handleInputQuantity(cart, Number.parseInt(e.target.value))}
                            className="w-10 text-center outline-none"
                            min="1"
                        />
                    <Button onClick={(e) => handleAddQuantity(e, cart)} className="text-black bg-transparent shadow-none hover:bg-transparent"><Plus /></Button>
                  </td>
                  <td className="px-2 py-2">${cart.price * cart.quantity}</td>
                  <td className="px-2 py-2">
                    <Button onClick={(e) => handleRemoveCart(e, cart)}>
                      <DeleteAlart />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-400">
                <td className="px-2 py-2" colSpan={3}>
                  <Button className="px-8 cursor-pointer py-3.5 bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold className leading-[16px]">
                    Return to shop
                  </Button>
                </td>
                <td className="px-2 py-2" colSpan={2}>
                  <Button className="px-8 py-3.5 cursor-pointer bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold className leading-[16px]">
                    Update Cart
                  </Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="w-[424px] bg-white rounded-lg p-6">
          <h2 className="text-[#191919] mb-2 text-xl font-medium leading-[30px]">
            Cart Total
          </h2>
          <div className="w-[376px] py-3 justify-between items-center flex">
            <span className="text-[#4c4c4c] text-base font-normal leading-normal">
              Total:
            </span>
            <span className="text-[#191919] text-base font-semibold leading-tight">
              ${total}
            </span>
          </div>
          <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
            <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
              Shipping:
            </span>
            <span className="text-[#191919] text-sm font-medium leading-[21px]">
              Free
            </span>
          </div>
          <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
            <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
              Subtotal:
            </span>
            <span className="text-[#191919] text-sm font-medium leading-[21px]">
              ${total}
            </span>
          </div>
          <Button className="w-[376px] text-white mt-5 px-10 py-4 bg-[#00b206] rounded-[44px] gap-4 text-base font-semibold leading-tight">
            Proceed to checkout
          </Button>
        </div>
      </div>
    </section>
  );
}
