export default function Color({color}: { color: string }) {
    return (
        <div className={`cursor-pointer border rounded-md border-gray-300 h-6 w-6 ${color}`} />
    )
}
