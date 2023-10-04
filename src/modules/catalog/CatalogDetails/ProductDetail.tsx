"use client";

import Image from "next/image"
import OrderSidebar from "./OrderSidebar"

export default function ProductDetail() {
    return (
        <div className="my-16 p-4 lg:p-0 flex flex-col lg:flex-row gap-16">
            <div className="lg:h-2/5">
                <div className="bg-gray-100 p-16 rounded-xl">
                    <Image src="/kursi.png" alt="gambar kursi" height={500} width={500} className="m-auto" />
                </div>
                <div className="grid grid-cols-4 gap-4 py-4">
                    <div className="bg-gray-100 p-4 rounded-xl">
                        <Image src="/kursi.png" alt="gambar kursi" height={100} width={100} className="m-auto" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl">
                        <Image src="/kursi.png" alt="gambar kursi" height={100} width={100} className="m-auto" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl">
                        <Image src="/kursi.png" alt="gambar kursi" height={100} width={100} className="m-auto" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl">
                        <Image src="/kursi.png" alt="gambar kursi" height={100} width={100} className="m-auto" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 lg:w-2/5">
                <h1 className="text-2xl font-medium leading-6">Kursi Mahal</h1>
                <p className="text-2xl font-bold">Rp125.000</p>
                <hr />
                <div>
                    <p className="mb-2">Pilih Variasi</p>
                    <div className="flex gap-2">
                    <div className="bg-gray-800 text-white rounded-lg px-2 py-1 w-fit cursor-pointer hover:bg-gray-900">Coklat</div>
                    <div className="bg-gray-800 text-white rounded-lg px-2 py-1 w-fit cursor-pointer hover:bg-gray-900">Coklat</div>
                    <div className="bg-gray-800 text-white rounded-lg px-2 py-1 w-fit cursor-pointer hover:bg-gray-900">Coklat</div>
                    <div className="bg-gray-800 text-white rounded-lg px-2 py-1 w-fit cursor-pointer hover:bg-gray-900">Coklat</div>
                    <div className="bg-gray-800 text-white rounded-lg px-2 py-1 w-fit cursor-pointer hover:bg-gray-900">Coklat</div>
                    </div>
                </div>
                <hr />
                <p className="text-gray-700 text-sm leading-6 text-justify md:text-base md:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti cum unde soluta ullam provident libero tempore reiciendis, dicta ab, totam officiis laborum natus. Cupiditate qui nemo tempora aperiam, vel sapiente cum ea aliquid dolor obcaecati? Consectetur nihil temporibus magnam, odit, hic facilis aliquid earum in reprehenderit minus aperiam voluptates?</p>
                <h2 className="text-sm font-semibold md:text-base md:leading-8">Dimensiones : <span className="font-normal">40 x 60 x 80 cm</span></h2>
                <h2 className="text-sm font-semibold md:text-base md:leading-8">Materiales : <span className="font-normal">Madera Robbe</span></h2>
            </div>
            <OrderSidebar />
        </div>
    )
}
