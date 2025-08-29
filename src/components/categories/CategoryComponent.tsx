'use client'
import { useGetCategoriesQuery } from "@/redux/services/categorys/categoriesApi";
import { CategoryType } from "@/types/categoryType";
import Image from "next/image";

export default function CategoryComponent() {
  const {data: category} = useGetCategoriesQuery();

  const categories = category as CategoryType[] || []

  return (
    <section className="py-10 px-[120px]">
      <h3 className="font-bold text-[32px]">Featured Categories</h3>
      <div className="grid grid-cols-4 gap-4 py-5 md:grid-cols-8 lg:grid-cols-10">
        {categories.map((category: CategoryType) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-green-100"
          >
            <Image
              src={category.image}
              alt="Category Image"
              width={50}
              height={50}
              unoptimized
              className="w-full h-full object-cover rounded-xl"
            />
            <p className="text-center pt-2">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
