"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ethers, parseEther } from 'ethers';
import ABI from '../../utils/ABI.json';

declare global {
    interface Window {
        ethereum?: any;
    }
}

interface IFormInput {
    name: string;
    architect: string;
    description: string;
    price: number;
    certificate: string;
    image: string;
}

const SellPage = () => {
    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data: { name: any | ethers.Overrides; architect: any | ethers.Overrides; description: any | ethers.Overrides; price: { toString: () => any; }; certificate: any | ethers.Overrides; image: any | ethers.Overrides; }) => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const bcateInstance = new ethers.Contract("0x4987f8941888AFf80e535D3aBe695E61A6a58f44", ABI, accounts[0]);

            const tx = await bcateInstance.createNftArch(
                data.name,
                data.architect,
                data.description,
                parseEther(data.price.toString()),
                data.certificate,
                data.image
            );

            await tx.wait();
            alert('Success create NFT');
        } catch (error) {
            alert(`Gagal membuat NFT: ${error}`,);

        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-4 flex flex-col space-y-4">
            <div>
                <p className="text-xl font-semibold mb-2">Welcome To Bcate</p>
                <p>Fill this form to sell your design</p>
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                <input
                    type="text"
                    {...register('name', { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Product Name"
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Architect Name</label>
                <input
                    type="text"
                    {...register('architect', { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Architect Name"
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea
                    {...register('description', { required: true })}
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Leave a comment..."
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                <input
                    type="number"
                    {...register('price', { required: true, min: 0.01 })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Price"
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Upload Certificate</label>
                <input
                    type="text"
                    {...register('certificate', { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Certificate URI"
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Upload Images</label>
                <input
                    type="text"
                    {...register('image', { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Image URI"
                />
            </div>

            <button
                type="submit"
                className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
                Submit
            </button>
        </form>
    );
}

export default SellPage;
