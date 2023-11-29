'use client';

import Card from '@/components/Card';

import abi from '@/utils/ABI.json';
import { useEffect, useState } from 'react';
import { useAuth } from '@/utils/useContextCustom';
import { ethers } from 'ethers';

export default function CatalogPage() {
	const { ethersProvider } = useAuth();
	const [data, setData] = useState<any>([]);

	const getAllBlueprints = async () => {
		try {
			const signer = await ethersProvider.getSigner();
			const contracts = new ethers.Contract(
				'0xd7c38389CB89Cdaa36b64bFEb16Fa8fb190c32B9',

				
				abi,
				signer
			);

			const transaction = await contracts.getAllBlueprints();
			console.log(transaction, 'trasnsaction');
			setData(transaction);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getAllBlueprints();
	}, []);

	return (
		<div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-8 p-4">
			<div className="col-span-5">
				<form>
					<div className="flex">
						<label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
							Search Catalog
						</label>
						<div className="relative w-full">
							<input
								type="search"
								id="search-dropdown"
								className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Search"
								required
							/>
							<button
								type="submit"
								className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-r-lg border focus:ring-4 focus:outline-none focus:ring-blue-300">
								<svg
									className="w-4 h-4"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20">
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</form>
			</div>

			<div className="col-span-5 lg:col-span-5">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					{data.map((data: any, idx: number) => (
						<Card
							key={idx}
							id={Number(data.id)}
							imageUrl={data.BlueprintImage}
							name={data.name}
							price={Number(data.pricePerNFT) / 1e18}
							desc={data.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
