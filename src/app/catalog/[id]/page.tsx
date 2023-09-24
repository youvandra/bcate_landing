"use client";

import { usePathname } from 'next/navigation'

export default function DetailCatalogPage() {

    const pathname = usePathname()
    const id = pathname.split('/')[ pathname.split('/').length - 1]

    return (
        <div className="max-w-screen-xl mx-auto">
            <p>Helo : {id}</p>
        </div>
    );
}