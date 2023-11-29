import { CardType } from '@/types/global';
import Link from 'next/link';

export default function Card({ id, imageUrl, name, price, desc }: CardType) {
	return (
		<Link href={`/catalog/${id}`}>
			<div className="bg-gray-100 h-60 rounded-md flex items-center justify-center overflow-hidden">
				<img
					src={imageUrl}
					alt="image"
					width={200}
					height={200}
					className="h-60 object-cover w-full"
				/>
			</div>
			<div className="p-4 flex flex-col space-y-3">
				<div className="flex flex-row justify-between items-end">
					<p className="text-lg">{name}</p>
					<p className="text-gray-600 text-sm font-semibold">{price} BTT</p>
				</div>
				<p className="text-gray-600 text-sm">{desc}</p>
				<button
					type="button"
					className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2">
					Buy Now
				</button>
			</div>
		</Link>
	);
}
