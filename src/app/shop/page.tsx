'use client';
import PopularProduct from "@/components/popularProduct/PopularProduct";
import { ProductType } from "@/types/productType";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

export default function page() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PopularProduct />
    </Suspense>
  );
}
