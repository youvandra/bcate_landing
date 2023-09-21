import Catalog from "@/modules/catalog/Catalog";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Bcate Catalog",
    description: "Catalog of BCate"
}

const CatalogPage = () => {
    return ( 
        <Catalog />
     );
}
 
export default CatalogPage;