import Card from "@/components/Card"

export default function SuggestedProducts() {
  return (
    <div className='mb-16 p-4'>
        <hr />
        <h2 className='text-sm p-4 bg-gray-700 text-white w-fit mb-8'>Mungkin Anda Suka</h2>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4'>
            { [1,2,3,4,5,6,7,8].map(item => {
                return <Card key={item} id={item.toString()} imageUrl="/kursi.png" name="Kursi Mahal" price={120000} />
            }) }
        </div>
    </div>
  )
}
