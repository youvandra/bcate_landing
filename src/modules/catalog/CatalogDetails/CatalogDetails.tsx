"use client";

import ProductDetail from "./ProductDetail"
import SuggestedProducts from "./SuggestedProducts"

export default function CatalogDetails({ id }: { id: string }) {
    return (
        <div className="max-w-screen-xl mx-auto ">
            <ProductDetail />
            <SuggestedProducts />
        </div>
    )
}
