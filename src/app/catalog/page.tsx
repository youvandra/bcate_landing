import Catalog from "@/modules/catalog/Catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bcate Catalog",
    description: "Catalog of BCate"
}

export default function CatalogPage() {
    return ( 
        <div className="max-w-screen-xl mx-auto">
            <Catalog />
        </div>
     );
}