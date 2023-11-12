import { createContext, useState } from "react";


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addToCart: () => {},
    removeToCart: () => {},
    deleteCart: () => {},
    getTotalCost: () => {},

})

function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(productId) {
        const quantity = cartProducts.find(product => product.id === productId)?.quantity

        if (quantity === undefined) {
            return 0
        }

        return (
            quantity,
            cartProducts.nome
            )
    }


    function addToCart(productId) {
        const quantity = getProductQuantity(productId)

        if(quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                     {
                        id: productId,
                        quantity: 1
                     }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product => product.id === productId ? { ...product, quantity: product.quantity + 1} : product
                )
            )
        }
    }

    function deleteCart(productId) {
        setCartProducts(
            cartProducts => 
            cartProducts.filter(currentProduct => {
                return currentProduct.id != productId
            })
        )
    }

    function removeToCart(productId) {
        const quantity = getProductQuantity(productId)

        if(quantity===1){
            deleteCart(productId)
        } else {
            setCartProducts(
                cartProducts.map(
                    product => product.id === productId ? { ...product, quantity: product.quantity - 1} : product
                )
            )
        }
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart,
        removeToCart,
        deleteCart,
    }


    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider