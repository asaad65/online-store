"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../component_modules/Cart.css";
import Link from "next/link";
import CountProduct from "./CountProduct";
import { useSelector, useDispatch } from "react-redux";
import { RemoveProduct } from "../redux/CartSlice";
import CartLoader from "./CartLoder";

import { useRouter } from 'next/navigation';


export default function Cart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const ProductCart = useSelector((state) => state.CartProduct);
  const [Type, SetType] = useState(false);
  const [total, setTotal] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [taggelLink,SettaggelLink] = useState(false)
  const selectMood = useSelector(state => state.Mood.value)
  
                console.log(ProductCart.length)

  useEffect(() => {
    const totalPrice = ProductCart.reduce((acc, item) => {
      const finalPrice = item.price - (item.price * item.discountPercentage / 100);
      return acc + finalPrice * (item.quantity || item.minimumOrderQuantity);
    }, 0);
    setTotal(totalPrice.toFixed(2));
  }, [ProductCart]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loginData = localStorage.getItem("Login");
      const newAccountData = localStorage.getItem("NewAccount");
      setIsLoggedIn(loginData !== null || newAccountData !== null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Login");
    localStorage.removeItem("NewAccount");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <>
      <div className="container" dir="ltr">
        <div className="contenerLink">
          <p className="pargLink">
            <Link
              href={"/ProductAll"}
              style={ selectMood != "dark" ? { color: "#000", textDecoration: "none",borderColor:'#000' } : { color: "#fff", textDecoration: "none" }}
            >
             All purchases
            </Link>
          </p>
          <p className="pargLink">
            <Link
              href={"/"}
              style={ selectMood != "dark" ? { color: "#000", textDecoration: "none" } : { color: "#fff", textDecoration: "none" }}
            >
              Home
            </Link>
            </p>
        </div>
        <div className="iconLink" onClick={()=>{SettaggelLink(true)}}>
          <h2 style={{display:'flex',flexDirection:'row',rotate:'90deg'}}>
            <p>|</p>
            <p>|</p>
            <p>|</p>
              
          </h2>
        </div>
        <div className="propsIconName"  style={taggelLink?{top:'0px',transition:'all 0.5s'}:{}}>
          <div style={{width:'100%',height:'100px'}}></div>
          <div style={{width:'100%',position:'absolute',display:'flex',top:'0px',justifyContent:'space-between',alignItems:'center',padding:'10px'}}>
           <h2 onClick={()=>{SettaggelLink(false)}} ><img src={"/icons/cancel.svg"} style={{ width: "40px", height: "40px" }} alt="close" /></h2>
              
           <img src="\imgs\logo-black.png" alt="" />
          </div>
           <div style={{width:'100%'}}>
            <p className="PLink">
            <Link
              href={"/ProductAll"}
              style={{ color: "#000", textDecoration: "none" }}
            >
              All purchases
            </Link>
          </p>
           <p className="PLink">
            <Link
              href={"/"}
              style={{ color: "#000", textDecoration: "none" }}
            >
              Home
            </Link>
            </p>
           </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {isLoggedIn ? (
            <button
              style={{
                background: "red",
                color: "#fff",
                padding: "10px 15px",
                border: "none",
                borderRadius: "6px",
                marginRight: "10px",
                fontSize:'17px',
                cursor:'pointer'
              }}
              onClick={handleLogout}
            >
              Log out
            </button>
          ) : (
            <>
            <Link href={'/Login'}>
                             <button className="btn contenu">
               Login
              </button>
            </Link>
             <Link href={'/NewAccount'}>
                 <button className="btn line">
                New account
              </button>
            </Link>

             
            </>
          )}

          <Image
          className="cartSize"
            src={
              selectMood !== "dark"
                ? "/icons/shopping_cart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                : "/icons/shopping.svg"
            }
            width={50}
            height={50}
            alt="cart"
            onClick={() => SetType(!Type)}
          />
        </div>
      </div>

      <div
        className="contenrProdactCart"
        style={{
          height: "100%",
          background: "#fff",
          position: "fixed",
          top: "0px",
          bottom: "0",
          right: Type ? "0" : "-700px",
          transition: "all 0.3s",
          zIndex: "1000000",
          direction:'ltr'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "10px",
            paddingBlock: "10px",
            borderBottom: "3px solid #949494",
          }}
        >
          <span onClick={() => SetType(!Type)}>
            <img src={"/icons/cancel.svg"} style={{ width: "40px", height: "40px" }} alt="close" />
          </span>
          <img
            src={"/imgs/logo-black.png"}
            alt="logo"
            style={{ width: "140px", height: "30px" }}
            className="imgLogo"
          />
        </div>

        <div dir="ltr" style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
          <span style={{ color: "#000" }}>total: ${total}</span>
        </div>

        <div className="ProductCartScrol">
          <CartLoader />
          {ProductCart.map((p) => {
            const finalPrice = (p.price - (p.price * p.discountPercentage / 100)).toFixed(2);
            return (
              <div
                key={p.id}
                style={{
                  background: "#ddd",
                  width: "100%",
                  height: "100px",
                  marginTop: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "5px",
                  paddingInline: "10px",
                  position: "relative",
                }}
              >
                <img
                  src={p.images[0]}
                  style={{
                    width: "80px",
                    borderRadius: "50px",
                    border: "2px solid #ff9800",
                  }}
                  alt={p.title}
                />
                <div>
                  <h4
                    style={{
                      fontSize: "16px",
                      width: "100px",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      color:'#000'
                    }}
                  >
                    {p.title}
                  </h4>
                </div>
                <h5 style={{ color: "#ff9800", fontSize: "18px" }}>{finalPrice}$</h5>
                <div>
                  <CountProduct
                    min={p.minimumOrderQuantity}
                    max={p.stock}
                    productId={p.id}
                    initialQuantity={p.quantity}
                  />
                </div>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background: "#fff",
                    padding: "10px",
                    borderRadius: "50px",
                    border: "1px solid red",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => dispatch(RemoveProduct(p))}
                >
                  <img src="/icons/delete.svg" alt="delete" />
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            background: "#fff",
            width: "100%",
            height: "20%",
            paddingInline: "10px",
            fontSize: "20px",
            borderTop: "2px solid #000",
          }}
        >
       



         
            {
                !(isLoggedIn && ProductCart.length >= 1)?(
                  
                                                <button
            style={{
              width: "100%",
              padding: "10px",
              marginBlock: "10px",
              background: "#ffd79aff",
              border: "1px solid #fff",
              borderRadius: "7px",
              cursor:'no-drop'
            }}
          >
            Buy now
          </button>
                  

                ):(
                  <Link href={'/Checkout'}>
                                                  <button
            style={{
              width: "100%",
              padding: "10px",
              marginBlock: "10px",
              background: "#ff9800",
              border: "1px solid #fff",
              borderRadius: "7px",
              cursor:'pointer'
            }}
          >
            Buy now
          </button>
                  
                  </Link>
                )
            }
        
          {!isLoggedIn ? (
    <button
      style={{
        width: "100%",
        padding: "10px",
        background: "#fff",
        border: "1px solid #ff9800",
        borderRadius: "7px",
      }}
      onClick={() => window.location = "/Login"}
    >
     Register Log in first
    </button>
          ):(
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#fff",
                border: "1px solid #ffffffff",
                borderRadius: "7px",
              background:'#ffd699ff',
              cursor:'no-drop'

              }}
          
            >
            Register Log in first
            </button>
          )}
        </div>
      </div>
    </>
  );
}