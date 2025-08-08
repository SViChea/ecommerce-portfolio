'use client';
import PopularProduct from "@/components/popularProduct/PopularProduct";
import React, { Suspense} from "react";

export default function page() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PopularProduct />
    </Suspense>
  );
}
