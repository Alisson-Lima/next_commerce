import React from 'react'

type FilterProps = {
    className: string
}

export default async function Filters({ className }: FilterProps) {

    const categories: string[] = await fetch("https://fakestoreapi.com/products/categories/").then(res => res.json())

    return (
        <ul className={`${className} flex space-x-4 text-lg justify-center items-center text-gray-400`}>
            {
                categories.map((item, id) => (
                    <li key={item + id} className='hover:text-emerald-400 transition-colors cursor-pointer'>{item}</li>
                ))
            }
        </ul>
    )
}