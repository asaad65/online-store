"use client"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddProduct } from "../redux/CartSlice";

export default function CartLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      parsedCart.forEach(product => {
        dispatch(AddProduct(product));
      });
    }
  }, []);

  return null; 
}
