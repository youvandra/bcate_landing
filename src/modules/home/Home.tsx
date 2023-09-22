import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className={`w-full py-8 h-auto grid grid-cols-12 gap-8`} >
                <div className='col-span-6 mt-10 flex flex-col space-y-6 ' >
                    <h1 className='text-6xl font-semibold'>BCate Project</h1>
                    <p className='max-w-lg text-lg'>Welcome to Bcate 👋, where creativity meets blockchain, your gateway to a world of unique architectural designs!</p>

                    <form className="max-w-md" >
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2">Search</button>
                        </div>
                    </form>

                    <div className="flex flex-row space-x-8 mt-12" >
                        <div className="flex flex-col items-start" >
                            <h1 className="text-2xl font-semibold" >1000+</h1>
                            <p className="text-base text-gray-500">Blueprint</p>
                        </div>
                        <div className="flex flex-col items-start" >
                            <h1 className="text-2xl font-semibold" >2354+</h1>
                            <p className="text-base text-gray-500">Template</p>
                        </div>
                        <div className="flex flex-col items-start" >
                            <h1 className="text-2xl font-semibold" >1000+</h1>
                            <p className="text-base text-gray-500">And More..</p>
                        </div>
                    </div>

                </div>
                <div className='col-span-6' >
                    <img src="https://www.coasterfurniture.com/wp-content/uploads/living-room-with-black-furniture.jpeg" alt="" className="object-cove rounded-md" />
                </div>
            </div>
            <div className="my-12" >
                <p className="text-3xl font-semibold mb-12" >Why use Bcate?</p>
                <div className="grid grid-cols-12 gap-4" >
                    <div className="col-span-3 flex flex-col space-y-2" >
                        <i className='bx bxl-bitcoin text-6xl'></i>
                        <h1 className="text-lg font-semibold" >NFT First</h1>
                        <p className="text-sm font-normal text-gray-800" >
                            BCate uses blockchain technology and NFT to create the certificate of authenticity for blue print design
                        </p>
                    </div>
                    <div className="col-span-3 flex flex-col space-y-2" >
                        <i className='bx bxs-shield-alt-2 text-6xl'></i>
                        <h1 className="text-lg font-semibold" >Protection</h1>
                        <p className="text-sm font-normal text-gray-800" >
                            Every certificates has been tokenized to prove the legitimacy of the design
                        </p>
                    </div>
                    <div className="col-span-3 flex flex-col space-y-2" >
                        <i className='bx bxs-certification text-6xl'></i>
                        <h1 className="text-lg font-semibold" >Certified</h1>
                        <p className="text-sm font-normal text-gray-800" >
                            BCate uses blockchain technology and NFT to create the certificate of authenticity for blue print design
                        </p>
                    </div>
                    <div className="col-span-3 flex flex-col space-y-2" >
                        <i className='bx bxl-bitcoin text-6xl'></i>
                        <h1 className="text-lg font-semibold" >NFT First</h1>
                        <p className="text-sm font-normal text-gray-800" >
                            BCate uses blockchain technology and NFT to create the certificate of authenticity for blue print design
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-12" >
                <p className="text-3xl font-semibold mb-2" >Lets explore</p>
                <p className="mb-12" >We provide all kinds of furniture design and building architecture</p>
                <div className="grid grid-cols-5 gap-4">
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                    <Card imageUrl="/kursi.png" name="Kursi Mahal" price={100} />
                </div>
                <div className="flex flex-row justify-center mt-8" >
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-3">Browse More</button>
                </div>
            </div>
            <div className="my-12" >
                <p>See Our Catalog</p>
                <div>

                </div>
            </div>
        </div>
    )
}
