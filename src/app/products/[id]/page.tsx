"use client"

import Container from "@/components/Container"
import { Product as ProductType } from "@/types/general"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page() {

    const params = useParams()
    const [product, setProduct] = useState<ProductType | null>(null)

    useEffect(() => {
        async function getProduct() {
            const product = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const res = await product.json()
            setProduct(res)
        }
        getProduct()
    }, [])

    return (
        <Container>
            <div className="flex flex-col space-y-4">
                {
                    product && (
                        <>
                            <Image src={product.image} alt={product.description} width={300} height={300} />
                            <h3>{product.rating.rate}</h3>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <h1>{product.price}</h1>
                        </>
                    )
                }
            </div>
            <button className="py-2 px-4 bg-emerald-500 rounded-sm mt-4">Add to cart</button>
        </Container>
    )
}