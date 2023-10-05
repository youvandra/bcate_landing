"use client";

import CatalogDetails from '@/modules/catalog/CatalogDetails/CatalogDetails';
import { usePathname } from 'next/navigation'

export default function DetailCatalogPage() {

    const pathname = usePathname()
    const id = pathname.split('/')[pathname.split('/').length - 1]

    return (
        <div>

            <div className="flex flex-col items-center justify-center p-8" >
                <img src="/kursi.png" alt="" className="h-96 object-cover mb-8" />
                <p className='text-2xl font-semibold mb-8' >Ash Cushion Wood Chair</p>
            </div>

            <div className="w-full bg-gray-950 text-white" >
                <div className='p-8 max-w-2xl mx-auto flex flex-col space-y-3' >
                    <p className='text-lg font-semibold' >Designer</p>
                    <p>Arlont Snyker</p>
                    <p className='text-lg font-semibold' >Description</p>
                    <p>The Ash Cushion Wood Chair is a stylish and comfortable seating option that adds a touch of elegance to any living space. Crafted from high-quality ash wood and featuring a plush cushion, it offers both durability and relaxation, making it the perfect choice for your home decor.</p>
                    <hr className='bg-white' />
                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Get blueprint design</button>
                </div>
            </div>

        </div>
    );
}