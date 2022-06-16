import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + product.price)
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }

    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }