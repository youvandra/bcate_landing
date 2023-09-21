import CatalogDetails from "@/modules/catalog/CatalogDetails";
import { paramsType } from "@/types/global";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Detail Catalog",
    description: "Detail of catalog"
};

export default function CatalogDetailsPage({ params }: paramsType) {
    const { id } = params;
    return ( 
        <CatalogDetails id={id} />
     );
}