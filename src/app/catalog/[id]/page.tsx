'use client';

import { useParams, usePathname } from 'next/navigation';

import abi from '@/utils/ABI.json';
import { useEffect, useState } from 'react';
import { useAuth } from '@/utils/useContextCustom';
import { ethers } from 'ethers';

export default function DetailCatalogPage() {
	const param = useParams();
	const { ethersProvider } = useAuth();
	const [data, setData] = useState<any>(null);

	const getAllBlueprints = async () => {
		try {
			const signer = await ethersProvider.getSigner();
			const contracts = new ethers.Contract(
				'0x5ddC6516B16B1fd700F98142c3F52B7C5163F5db',
				abi,
				signer
			);

			const transaction = await contracts.getAllBlueprints();
			const filteredData = transaction.filter(
				(data: any) => Number(data.id) === Number(param.id)
			);
			setData(filteredData[0]);
		} catch (error) {
			console.error(error);
		}
	};

	const handleMint = async () => {
		try {
			const signer = await ethersProvider.getSigner();
			const contracts = new ethers.Contract(
				'0x5ddC6516B16B1fd700F98142c3F52B7C5163F5db',
				abi,
				signer
			);

			const transaction = await contracts.mintBlueprint(BigInt(data.id), {
				gasLimit: 25000,
			});

			await transaction.wait();
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getAllBlueprints();
	}, []);

	if (!data) {
		return (
			<div className="flex justify-center items-center min-h-[50vh]">
				Loading..
			</div>
		);
	}

	return (
		<div>
			<div className="flex flex-col items-center justify-center p-8">
				<img
					src={data.BlueprintImage}
					alt=""
					className="h-96 object-cover mb-8"
				/>
				<p className="text-2xl font-semibold mb-8">{data.name}</p>
			</div>

			<div className="w-full bg-gray-950 text-white">
				<div className="p-8 max-w-2xl mx-auto flex flex-col space-y-3">
					<p className="text-lg font-semibold">Designer</p>
					<p>{data.designer}</p>
					<p className="text-lg font-semibold">Description</p>
					<p>{data.description}</p>
					<hr className="bg-white" />
					<button
						onClick={handleMint}
						type="button"
						className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
						Get blueprint design
					</button>
				</div>
			</div>
		</div>
	);
}
