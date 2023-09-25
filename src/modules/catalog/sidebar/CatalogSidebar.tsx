import Select, { IOption } from "@/components/Select"
import Color from "./Color";
import Range from "./Range";
import Ratings from "./Ratings";

const tableCategories: IOption[] = [
    {
        label: "Meja Plitur",
        value: "meja-plitur"
    },
    {
        label: "Meja Batikan",
        value: "meja-batikan"
    }
];

const chairCategories: IOption[] = [
    {
        label: "Kursi Plitur",
        value: "kursi-plitur"
    },
    {
        label: "Kursi Batikan",
        value: "kursi-batikan"
    }
];

const colorData: string[] = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500", "bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"];

export default function CatalogSidebar() {
    return (
        <div className="bg-white shadow-xl p-4 flex flex-col gap-6 sticky top-4">
            <section className="flex flex-col gap-4">
                <h2 className="font-semibold">Categories</h2>
                <Select formlabel="Pilih Jenis Meja" options={tableCategories} />
                <Select formlabel="Pilih Jenis Kursi" options={chairCategories} />
                <p className="cursor-pointer font-semibold text-sm text-center p-2 border w-full border-l-0 border-r-0">Show All</p>
            </section>
            <section className="flex flex-col gap-4">
                <h2 className="font-semibold flex flex-col gap-4">Filters</h2>
                <section className="flex flex-col gap-2">
                    <h3 className="font-medium text-sm">Color</h3>
                    <div className="grid grid-cols-6 gap-2">
                        {colorData.map(col => <Color key={col} color={col} />)}
                    </div>
                </section>
                <section className="flex flex-col gap-2">
                    <h3 className="font-medium text-sm">Price</h3>
                    <label htmlFor="minimal" className="text-sm">Min</label>
                    <input type="number" className="border border-gray-400 rounded-lg p-2 w-full placeholder:text-sm" placeholder="contoh: 25.000" />
                    <label htmlFor="minimal" className="text-sm">Max</label>
                    <input type="number" className="border border-gray-400 rounded-lg p-2 w-full placeholder:text-sm" placeholder="contoh: 28.000" />
                </section>
                <section className="flex flex-col gap-2">
                    <h3 className="font-medium text-sm">Ratings</h3>
                    <Ratings star={5} />
                    <Ratings star={4} />
                    <Ratings star={3} />
                    <div className="flex gap-4">
                        <Ratings star={2} />
                        <Ratings star={1} />
                    </div>
                </section>
            </section>
            <button className="bg-gray-800 text-white p-2 w-full rounded-lg hover:bg-gray-900">Apply</button>
        </div>
    )
}
