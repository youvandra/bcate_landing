"use client";

import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form"

const SellPage = () => {

    interface IFormInput {
        name: string
        certificate: string
        image: any
        description: string | any
        price: number | any
    }


    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-4 flex flex-col space-y-4" >
            <div>
                <p className="text-xl font-semibold mb-2" >Welcome To Bcate</p>
                <p>Fill this form to sell your design</p>
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Your Product Name</label>
                <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Upload Certificate</label>
                <input name="certificate" id="certificate" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="user_avatar_help" type="file" />
                <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Upload Images</label>
                <input name="image" id="image" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="user_avatar_help" type="file" />
                <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                <input type="number" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>

            <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                Submit
            </button>

        </form>
    )

}

export default SellPage;