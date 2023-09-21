import { cardType } from "@/types/global"
import Image from "next/image"
import Link from "next/link"

export default function Card({ imageUrl, name, price }: cardType) {
    return (
        <Link href="/catalog/1">
            <div className="bg-gray-100 h-60 rounded-xl overflow-hidden">
                <Image src={imageUrl} alt="image" width={200} height={200} className="block m-auto" />
            </div>
            <div className="p-4 pt-2 pl-0">
                <p className="mb-2">{ name }</p>
                <p className="text-gray-700 text-sm">Rp{ price }</p>
            </div>
        </Link>
    )
}
