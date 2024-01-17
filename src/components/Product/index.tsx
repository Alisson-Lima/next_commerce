// 'use client'
import React from 'react'
import { Product as ProductProps } from '@/types/general'
import Image from 'next/image'
import Link from 'next/link'


export default function Product(data: ProductProps) {
    console.log(data.image)
    return (
        <Link href={`/products/${data.id}`} className='max-w-[296px] mb-10 text-gray-400'>
            <div className='rounded-md h-[296px] mb-4 relative bg-white overflow-hidden w-[296px] flex justify-center items-center'>
                <Image src={data.image} alt={data.description} width={296} height={296} className='object-contain h-[232px] w-[232px]' />
            </div>

            <p className='mb-1 text-yellow-400'>{data.rating.rate}</p>
            <h1 className='text-md mb-2'>{data.title}</h1>
            <h3 className='text-2xl font-bold'>${(data.price).toFixed(2)}</h3>
        </Link>
    )
}