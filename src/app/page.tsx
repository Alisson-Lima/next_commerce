import Container from "@/components/Container";
import Filters from "@/components/Filters";
import Product from "@/components/Product";
import ProductSkeleton from "@/components/skeletons/Product";
import { Product as ProductType } from "@/types/general";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {

  const products: ProductType[] = await fetch("https://fakestoreapi.com/products").then((res) => res.json())

  return (
    <Container>
      <div className="hero p-4 box-border flex text-center justify-center items-center flex-col bg-gray-900 min-h-80 my-10 rounded-xl">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-200 mb-4">Welcome to Next Commerce!</h1>
        <p className="text-md md:text-xl mb-4 text-gray-400">A simple ecommerce project made with <Link href="https://nextjs.org/">NextJS</Link></p>
        <div className="flex gap-4 w-full justify-center">
          <input type="text" placeholder="Type a product" className="max-w-96 w-full py-1 px-4 rounded-sm outline-none text-gray-900" />
          <button className=" bg-emerald-800 py-1 px-4 rounded-sm hover:brightness-125 transition-all">
            Search
          </button>
        </div>
      </div>

      <Filters className="mb-10" />

      <div className="flex flex-wrap w-full justify-center sm:space-x-4">
        {
          products?.map(item => (
            <Suspense fallback={<ProductSkeleton />}>
              <Product key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} price={item.price} rating={item.rating} />
            </Suspense>
          ))
        }
      </div>
    </Container>
  )
}
