import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import CartItem from './CartItem'
import { CartContextProvider } from '@/contexts/CartContext'

export default function Header() {
    return (
        <nav className='border-b-2 border-gray-900 py-4'>
            <Container className="flex justify-between items-center">
                <h1 className='text-xl font-bold uppercase text-emerald-500'>Next Commerce</h1>

                <ul className='flex space-x-4 p-0 text-gray-600'>
                    <li><Link href="/" className='hover:text-gray-200 transition-colors'>Home</Link></li>
                    <CartContextProvider>
                        <CartItem />
                    </CartContextProvider>
                </ul>
            </Container>
        </nav>
    )
}