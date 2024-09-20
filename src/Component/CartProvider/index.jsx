import React, { createContext, useEffect, } from 'react';
import { useState } from 'react';

export const CartContext = createContext();
const CartProvider = ({ children }) => {
    // lay du lieu gio hangf tu local storage
    const stringCartList = localStorage.getItem("cart_list");
    const arrCarts = JSON.parse(stringCartList) || [];
    // dat gia tri ban dau cho state cart list laf du lieu lay tu local storage
    const [cartList, setCartList] = useState(arrCarts);


    //addToCart({ id, name, quantity, price })

    const addToCart = (product) => {
        // Tìm xem đã nằm trong cart hay chưa
        const foundProduct = [...cartList].find((item) => item?.id === product?.id);

        //nếu đã tồn tại
        if (foundProduct) {
            // thì tăng số lượng
            foundProduct.quantity = (foundProduct.quantity || 0) + (product?.quantity || 1);

            setCartList((oldList) => {
                return oldList.map((product) => {
                    if (product?.id === foundProduct?.id) {
                        return foundProduct;
                    }
                    return product;
                })
            })
        } else {
            // nếu không tồn tại thì thêm sản phẩm đó vào trong cart
            const oldList = [...cartList];
            oldList.push(product);
            setCartList(oldList);
        }
    }

    //deleteFromCart(id)
    const deleteFromCart = (id) => {
        const oldCart = [...cartList];
        const newCartList = oldCart.filter((prd) => prd.id !== id);
        setCartList(newCartList);
    }
    //caculateTotal()
    const caculateTotal = () => {
        const total = cartList.reduce((sum, prd) => {
            return sum + (prd?.price || 0)
        }, 0);
        return total;
    }

    // moi khi cart list thay doi thi luu lai vao local storage
    useEffect(() => {
        localStorage.setItem("cart_list", JSON.stringify(cartList));
    }, [cartList])

    return (
        <CartContext.Provider value={{ cartList, setCartList, addToCart, deleteFromCart, caculateTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

