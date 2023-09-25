import Image from "next/image"

export default function ProductDetail() {
    return (
        <div className="my-16 p-4 md:p-0 flex flex-col md:flex-row gap-16">
            <div className="md:h-2/5">
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
            <div className="flex flex-col gap-8 md:w-2/5">
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
            <div className="hidden w-1/5 border rounded-xl p-4 md:flex flex-col gap-6 h-fit">
                <p className="font-semibold">Atur jumlah dan catatan</p>
                <section className="flex items-center gap-1">
                    <div className="bg-gray-100 w-fit rounded-md overflow-hidden">
                        <Image src="/kursi.png" alt="kursi" width={50} height={50} className="block m-auto" />
                    </div>
                    <p>Kursi Mahal</p>
                </section>
                <hr />
                <section className="flex gap-4 items-center">
                    <input type="number" className="border border-gray-300 p-2 rounded-lg w-1/3 text-center" />
                    <p>Stok : <span className="font-semibold">12</span></p>
                </section>
                <hr />
                <section>
                    <label htmlFor="catatan" className="text-sm block mb-2">Tuliskan catatan (opsional)</label>
                    <textarea name="catatan" id="catatan" cols={30} rows={3} className="w-full border border-gray-300 rounded-lg"></textarea>
                </section>
                <hr />
                <section className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <p className="font-bold text-lg">Rp125.000</p>
                </section>
                <section>
                    <button className="bg-gray-800 text-white p-2 w-full rounded-lg mb-2 hover:bg-gray-900">+ Keranjang</button>
                    <button className="border border-gray-800 text-gray-800 p-2 w-full rounded-lg">Beli Langsung</button>
                </section>
            </div>
        </div>
    )
}
