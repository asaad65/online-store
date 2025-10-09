"use client"
import { useDispatch, useSelector } from "react-redux"
import { AddProduct, RemoveProduct } from "../redux/CartSlice"

export default function ProductButtons({ product ,quantity}) {
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.CartProduct)

  const isInCart = cartProducts.some(p => p.id === product.id)
  return (
    <>
      {isInCart ? (
        <button className="buy-button del" onClick={() => dispatch(RemoveProduct(product))}>
        Remove from cart
        </button>
      ) : (
        <button className="buy-button Add" onClick={() => dispatch(AddProduct({ ...product, quantity }))}>
         Add to cart
        </button>
      )}
    </>
  )
}
