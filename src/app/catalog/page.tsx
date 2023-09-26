import Card from "@/components/Card";
import CatalogSidebar from "@/modules/catalog/sidebar/CatalogSidebar";
import { randomId } from "@/utils/generator";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bcate Catalog",
    description: "Catalog of BCate"
}

export default function CatalogPage() {
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-8 p-4">
            <div className="col-span-5" >
                <form>
                    <div className="flex">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search" required />
                            <button type="submit"
                                className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-r-lg border focus:ring-4 focus:outline-none focus:ring-blue-300"><svg
                                    className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg></button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="hidden lg:block lg:col-span-1" >
                <CatalogSidebar />
            </div>

            <div className="col-span-5 lg:col-span-4" >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" >
                    {
                        randomId(10).map(num => (
                            <Card key={num} id={num} imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}