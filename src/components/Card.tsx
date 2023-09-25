import { CardType } from "@/types/global"
import Image from "next/image"
import Link from "next/link"

export default function Card({ id, imageUrl, name, price }: CardType) {
    return (
        <Link href={`/catalog/${id}`}>
            <div className="bg-gray-100 h-60 rounded-md flex items-center justify-center overflow-hidden">
                <Image src={imageUrl} alt="image" width={200} height={200} className="block m-auto" />
            </div>
            <div className="p-4 flex flex-col space-y-3">
                <div className="flex flex-row justify-between items-end" >
                    <p className="text-lg">{name}</p>
                    <p className="text-gray-600 text-sm font-semibold">${price}</p>
                </div>
                <p className="text-gray-600 text-sm" >
                    Every certificates has been tokenized to prove the legitimacy of the design.
                </p>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2">Buy Now</button>
            </div>
        </Link>
    )
}
