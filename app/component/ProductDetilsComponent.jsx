'use client'
import ProductButtons from "@/app/component/ProductButtons";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import styles from '@/app/ProductDetails/[id]/page.module.css'
import ProdactsCatugre from "./ProdactsCatugre";

export default function ProductDetilsComponent({ id }) {
  const selectMood = useSelector(state => state.Mood.value);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
     const btnStyle = {
  width:'40px',
  height:'40px',
  borderRadius: '50%',
  border: '1px solid #ff9800',
  backgroundColor: '#fff',
  color: '#ff9800',
  fontSize: '18px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const boxStyle = {
  width:'40px',
  height:'40px',
  borderRadius: '50%',
  border: '1px solid #ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px'
};
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setQuantity(data.minimumOrderQuantity);
      } catch (err) {
        setError(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) return(
    <div className={styles.continerLoading}>
                   <div style={{ flex: '1 1 300px',height:'400px', maxWidth: '400px',background:'#f8d7da',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px',color:'#000' }}>
                     An error occurred
                  </div>
                  <div style={{flex: '1 1 300px', maxWidth: '500px'}}>
                     <div style={{width:'100%',height:'25px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'80%',height:'20px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'90%',height:'30px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'70%',height:'20px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>
                     <div style={{width:'50%',height:'40px',borderRadius:'10px',background:'#f8d7da',marginBottom:'10px'}}></div>

                  </div>

               </div>
  ) 
  if (!product) return (
          <div  className={styles.continerLoading}>
          <div style={{ flex: '1 1 300px', height: '400px', maxWidth: '400px', background: '#ddd', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: '#000' }}>
            ...Loading Product Details
          </div>
          <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>
                                 <div style={{width:'100%',height:'25px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'80%',height:'20px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'90%',height:'30px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'70%',height:'20px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'20%',height:'20px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
                     <div style={{width:'50%',height:'40px',borderRadius:'10px',background:'#ddd',marginBottom:'10px'}}></div>
          </div>
        </div>
  );

  const finalPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
  const colorShadow = selectMood === 'dark' ? '#fff' : '#000';



  const handleChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
      return(
<div dir="rtl" style={{ padding: '30px' }}>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    direction:'ltr'
  }}>

    <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
      <img src={product.images[0]} alt={product.title} style={{
        width: '100%',
        borderRadius: '10px',
        background:'#fff',
        boxShadow: `0 4px 10px ${colorShadow}`
        
      }} />
    </div>


    <div style={{ flex: '1 1 300px', maxWidth: '500px',direction:'ltr' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>{product.title}</h1>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
        {product.description}
      </p>

   
      <div style={{ marginBottom: '10px' }}>
        <h3 style={{ fontSize: '22px', color: '#ff9800' }}>
          price: ${finalPrice}
          <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '16px', marginRight: '10px' }}>
            ${product.price}
          </span>
        </h3>
        <p style={{ color: '#4caf50' }}>condition: {product.availabilityStatus}</p>
      </div>

   
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#666' }}>
        <li> Brand: {product.brand}</li>
        <li>Category: {product.category}</li>
        <li>Warranty: {product.warrantyInformation}</li>
        <li> Return policy: {product.returnPolicy}</li>
        <li>shipping: {product.shippingInformation}</li>
        <li> Minimum order : {product.minimumOrderQuantity} piece</li>
        <li>Evaluation: ⭐ {product.rating} / 5</li>
        <li>Barcode: {product.meta.barcode}</li>
        <li>weight: {product.weight} grams</li>
        <li>Dimensions: {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} mm</li>
      </ul>



    <div dir="ltr" style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0',justifyContent:'end' ,direction:'rtl'}}>
      <button onClick={() => quantity < product.stock && handleChange(quantity + 1)} style={btnStyle}>+</button>
      <div style={boxStyle}>{quantity}</div>
      <button onClick={() => quantity > product.minimumOrderQuantity && handleChange(quantity - 1)} style={btnStyle}>-</button>
       <label style={{ fontWeight: 'bold' }}>number:</label>

    </div>
      <ProductButtons product={product} quantity={quantity} />
    </div>
  </div>
        <div style={{
        backgroundColor: '#ff9800',
        color: '#fff',
        fontSize: '20px',
        padding: '10px',
        marginTop: '40px',
        borderRadius: '5px',
        textAlign: 'center'
      }}>
        Related Products
      </div>

      <div className={styles.continer}>
        <ProdactsCatugre params = {product.category} />
      </div>
</div> 



    )
}