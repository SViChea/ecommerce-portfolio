import ProductDetail from "@/components/popularProduct/ProductDetail";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail />
    </Suspense>
  );
}
