"use client";

import { AiOutlineStar } from "react-icons/ai";

const generateStarsArray = (number: number) => {
    const stars = [];
    for (let i = 1; i <= number; i++) {
        stars.push(i);
    }
    return stars;

};

export default function Ratings({ star }: {star: number}) {
    return (
        <div className="p-2 w-full flex justify-center gap-1 rounded-lg border border-gray-800 cursor-pointer hover:bg-gray-50">
            {generateStarsArray(star).map(num => <AiOutlineStar key={num} size={24} />)}
        </div>
    )
}
