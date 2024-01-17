"use client"

import { CartContextReducerType, Product } from "@/types/general";
import { useContext, createContext, ReactNode, useReducer, Dispatch } from "react";

type CartContextProps = {
    cart: Product[],
    dispatch: Dispatch<CartContextReducerType>
}

export const CartContext = createContext<CartContextProps | null>(null)

export const reducer = (state: Product[], action: { type: string, payload: Product }): Product[] => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return [action.payload, ...state];
        case "DELETE_PRODUCT":
            return state.filter(p => p.id !== action.payload.id);
        default:
            return state;
    }
}

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const initialValues: Product[] = [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 22.3,
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            id: 3,
            title: "Mens Cotton Jacket",
            price: 55.99,
            description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            rating: {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            id: 13,
            title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
            price: 599,
            description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
            category: "electronics",
            image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
            rating: {
                rate: 2.9,
                count: 250
            }
        },
    ];
    const [cart, dispatch] = useReducer(reducer, initialValues);
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}


export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartContextProvider');
    }
    return context;
}
