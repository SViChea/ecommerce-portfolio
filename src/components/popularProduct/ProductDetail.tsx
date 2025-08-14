'use client'
import Image from "next/image";
import { ProductType } from "@/types/productType";
import { useParams } from "next/navigation";
import { useGetProductsByIdQuery } from "@/redux/services/products/productsApi";

export default function ProductDetail() {
  const { id } = useParams();
  const paramId = parseInt(id as string)
  
  const { data:products, isLoading } = useGetProductsByIdQuery(paramId);

  if(isLoading){
    return <div>Loading...</div>
  }

  const product = products as ProductType ;

  return (
    <div>
      <div className="container mx-auto px-4 py-10">
          <div key={product.id} className="flex flex-wrap -mx-4">
            {/* productsDetail Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <Image
                src={product.images[0]}
                alt="productsDetail"
                width={400}
                height={400}
                className="w-[90%] h-auto rounded-lg"
                unoptimized
              />
            </div>

            {/* productsDetail Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">
                {product.title}
              </h2>

              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">${product.price}</span>
              </div>

              <p className="text-gray-700 mb-6">
                {product.description}
              </p>

              {/* Quantity */}
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 mb-6">
                <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Add to Cart
                </button>
                <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
