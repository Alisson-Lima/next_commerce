export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    category?: string
    rating: {
        rate: number,
        count: number
    }
}

export type Cart = Product[]

export type CartContextReducerType =
    { type: 'ADD_PRODUCT'; payload: Product }
    | { type: 'DELETE_PRODUCT'; payload: Product }