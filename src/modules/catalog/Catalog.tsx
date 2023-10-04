"use client";

import Card from "@/components/Card";

const Catalog = () => {
    return (
        <div className="max-w-screen-xl p-8">
            <div className="md:grid md:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map(num => <Card key={num} id={num.toString()} imageUrl="/kursi.png" name="Kursi Mahal" price={1250000} />)}
            </div>
        </div>
    );
}

export default Catalog;