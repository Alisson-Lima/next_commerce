'use client'

import React, { useEffect, useState } from 'react'
import { Product as ProductType } from '@/types/general'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useCartContext } from '@/contexts/CartContext'

export default function ProductDetails() {
    const params = useParams()
    const [product, setProduct] = useState<ProductType | null>(null)

    const { dispatch } = useCartContext()

    useEffect(() => {
        async function getProduct() {
            const product = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const res = await product.json()
            setProduct(res)
        }
        getProduct()
    }, [])

    const handleAdd = (data: ProductType) => {
        dispatch({ type: "ADD_PRODUCT", payload: data })
    }

    return (
        <>
            <div className="flex flex-row mt-10 gap-10 flex-wrap justify-center md:flex-nowrap md:justify-normal">
                {
                    product && (
                        <>
                            <div className=" max-w-xl md:w-1/2 w-full flex items-center justify-center bg-white rounded-md min-h-[400px] relative ">
                                <Image src={product.image} alt={product.description} width={250} height={250} className='object-contain rounded-xl inline-block w-[250] h-[250] ' />

                            </div>
                            <div className="text-gray-300 md:w-1/2 max-w-xl">
                                <h3 className='text-yellow-500 text-xl font-extrabold mb-2'>{product.rating.rate}</h3>
                                <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
                                <h1 className='text-2xl font-bold mb-2'>${product.price}</h1>
                                <p className='leading-relaxed'>{product.description}</p>
                                <button className="py-2 px-4 bg-emerald-600 rounded-sm mt-4 font-bold" onClick={() => handleAdd(product)}>Add to cart</button>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}