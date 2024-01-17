"use client"

import React from 'react'
import { useCartContext } from '@/contexts/CartContext'
import Product from '../Product'

export default function CartProducts() {
    const { cart } = useCartContext()
    return (
        <div className='flex flex-wrap w-full justify-center sm:space-x-4 mt-10'>
            {
                cart.length > 0 ? (
                    <>
                        {
                            cart.map(p => (
                                <Product key={p.title + p.id} id={p.id} description={p.description} image={p.image} price={p.price} rating={p.rating} title={p.title} />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <p>Nenhum produto adicionado</p>
                    </>
                )
            }
        </div>
    )
}