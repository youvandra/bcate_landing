import CatalogDetails from "@/modules/catalog/CatalogDetails";
import { paramsType } from "@/types/global";

export default function CatalogDetailsPage({ params }: paramsType) {
    const { slug } = params;
    return ( 
        <CatalogDetails slug={slug}  />
     );
}