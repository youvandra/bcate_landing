export default function CatalogDetails({ slug }: { slug: string }) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <p>Welcome to catalog details with id : <span className="bg-blue-400 p-2 text-white">{slug}</span></p>
        </div>
    )
}
