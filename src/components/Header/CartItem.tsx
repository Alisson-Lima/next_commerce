'use client'

import { useCartContext } from '@/contexts/CartContext'
import Link from 'next/link'
import React from 'react'

export default function CartItem() {
    const { cart } = useCartContext()
    return (
        <li className='relative'>
            <Link href="/cart" className='hover:text-gray-200 transition-colors'>
                Cart
            </Link>
            <span className='bg-emerald-400 font-bold text-[10px] text-black p-2 flex justify-center items-center w-2 h-2 rounded-full absolute -top-1 -right-5'>{cart.length}</span>
        </li>
    )
}