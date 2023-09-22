import Image from "next/image"

export default function CatalogDetails({ id }: { id: string }) {
    return (
        <div className="my-8 p-4 md:p-0 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="md:h-1/2">
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
            <div className="flex flex-col gap-8 md:w-1/2">
                <h1 className="text-2xl font-semibold leading-6">Kursi Mahal</h1>
                <hr />
                <p className="text-gray-700 text-sm leading-6 text-justify md:text-base md:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti cum unde soluta ullam provident libero tempore reiciendis, dicta ab, totam officiis laborum natus. Cupiditate qui nemo tempora aperiam, vel sapiente cum ea aliquid dolor obcaecati? Consectetur nihil temporibus magnam, odit, hic facilis aliquid earum in reprehenderit minus aperiam voluptates?</p>
                <h2 className="text-sm font-semibold md:text-base md:leading-8">Dimensiones : <span className="font-normal">40 x 60 x 80 cm</span></h2>
                <h2 className="text-sm font-semibold md:text-base md:leading-8">Materiales : <span className="font-normal">Madera Robbe</span></h2>
                <p className="text-2xl font-semibold md:text-4xl">$2000</p>
                <div className="flex gap-4">
                    <input type="number" className="border w-1/3 rounded-lg text-center text-lg" value={0} />
                    <button className="bg-gray-800 text-white p-4 rounded-lg w-full hover:bg-gray-900 ">Buat Pesanan</button>
                </div>
            </div>
        </div>
    )
}
