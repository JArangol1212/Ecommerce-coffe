"use client";

import { useGetCategoryProducts } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";

import { useParams } from "next/navigation";

import { FilterControlsCategory } from "./components/filters-control-category";
import { SkeletonSchema } from "@/components/skeletonSchema";
import { ProductCard } from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const categorySlug = typeof params.categorySlug === "string" ? params.categorySlug : "";

  const { result, loading}: ResponseType = useGetCategoryProducts(categorySlug);

  const [filterOrigin, setFilterOrigin] = useState("");
  const [FilterTaste, setFilterTaste] = useState("");
 

  const filteredProducts =
    result !== null && !loading
      ? result.filter((product: ProductType) => {
          const matchesOrigin = filterOrigin === "" || product.origin === filterOrigin;
          const matchesTaste = FilterTaste === "" || product.taste === FilterTaste;
          return matchesOrigin && matchesTaste;
        })
      : [];

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium">Café {result[0]?.category?.categoryName}</h1>
      )}
      <Separator />
      <div className="sm:flex sm:justify-between">
        <FilterControlsCategory setFilterOrigin={setFilterOrigin} setFilterTaste={setFilterTaste} />

        <div className="grid gap-5 sm-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            !loading && <p>No hay productos con este filtro.</p>
          )}
        </div>
      </div>
    </div>
  );
}
