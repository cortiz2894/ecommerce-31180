import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + product.price)
            localStorage.setItem('products', JSON.stringify([...cartListItems, product]))
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }

    const deleteProduct = (product) => {
        // console.log("Producto a eliminar:", product)
        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartProducts,
        deleteProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }