"use client"
import { useDispatch, useSelector } from "react-redux"
import { AddProduct, RemoveProduct } from "../redux/CartSlice"
import { AlertTagel, AlertTagelOff } from "../redux/AlertTagelPrudactSlice"

export default function ProductButtons({ product ,quantity}) {
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.CartProduct)
  
  const isInCart = cartProducts.some(p => p.id === product.id)
    const handleAdd = () => {
    dispatch(AddProduct({ ...product, quantity }));
    dispatch(AlertTagel());
    setTimeout(() => {
      dispatch(AlertTagelOff());
    }, 2000);
  };

  const handleRemove = () => {
    dispatch(RemoveProduct(product));
    dispatch(AlertTagel());
    setTimeout(() => {
      dispatch(AlertTagelOff());
    }, 2000);
  };
  return (
    <>
      {isInCart ? (
        <button className="buy-button del" onClick={handleRemove}>
        Remove from cart
        </button>
      ) : (
        <button className="buy-button Add" onClick={handleAdd}>
         Add to cart
        </button>
      )}
    </>
  )
}



// import { useDispatch } from 'react-redux';
// import { AddProduct, RemoveProduct } from '../redux/CartSlice';
// import { AlertTagel, AlertTagelOff } from '../redux/AlertTagelPrudactSlice';

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

  // const handleAdd = () => {
  //   dispatch(AddProduct(product));
  //   dispatch(AlertTagel());
  //   setTimeout(() => {
  //     dispatch(AlertTagelOff());
  //   }, 2000);
  // };

  // const handleRemove = () => {
  //   dispatch(RemoveProduct({ id: product.id }));
  //   dispatch(AlertTagel());
  //   setTimeout(() => {
  //     dispatch(AlertTagelOff());
  //   }, 2000);
  // };
//   return (
//     <>
//       {isInCart ? (
//         <button className="buy-button del" onClick={handleRemove}>
//         Remove from cart
//         </button>
//       ) : (
//         <button className="buy-button Add" onClick={handleAdd}>
//          Add to cart
//         </button>
//       )}
//     </>
//   )
// };