import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar/Nvb"
import MyFooter from "../components/Footer/MyFooter";
import { CartContext } from "../CartContext";
import SingleProduct from "../components/SingleProducts/SingleProduct";

const Carrello = () => {
    //45.52
    const cart = useContext(CartContext)
    console.log("cart", cart.items);

    return (
        <>
        <Navbar/>
            <div className="mt-5 pt-5">
               {cart.items.map((p) => (
                <SingleProduct
                    _id={p.id}
                />
               ))}
                
            </div>
        <MyFooter/>
        </>
    )
}

export default Carrello



