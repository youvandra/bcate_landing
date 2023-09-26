import Image from "next/image"

export default function OrderSidebar() {
    return (
        <div className="hidden w-1/5 border rounded-xl p-4 lg:flex flex-col gap-6 h-fit">
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
    )
}
