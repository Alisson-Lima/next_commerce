"use client"

import CartProducts from '@/components/CartProducts'
import Container from '@/components/Container'
import { CartContextProvider } from '@/contexts/CartContext'

export default function Cart() {

    return (
        <Container>
            <CartContextProvider>
                <h1 className='text-3xl font-bold mt-10 text-gray-400'>Carrinho</h1>
                <CartProducts />
            </CartContextProvider>
        </Container>
    )
}