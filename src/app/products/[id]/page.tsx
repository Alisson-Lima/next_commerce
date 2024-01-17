import Container from "@/components/Container"
import ProductDetails from "@/components/ProductDetails"
import { CartContextProvider } from "@/contexts/CartContext"

export default function Page() {
    return (
        <Container>
            <CartContextProvider>
                <ProductDetails />
            </CartContextProvider>
        </Container>
    )
}