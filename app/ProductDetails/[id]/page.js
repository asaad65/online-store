import Cart from "@/app/component/Cart";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Styles from './page.module.css'
const ProductDetilsComponent = dynamic(() => import('@/app/component/ProductDetilsComponent'), {
  suspense: true,
});

export default function ProductDetails({ params }) {
  return (
    <>
      <Suspense fallback={<div style={{background:'#ddd',width:'80%',height:'40px',direction:'ltr',margin:'20px auto',display:'flex',alignItems:'center',justifyContent:'center',color:'#000'}}  >Loading Cart...</div>}>
  <Cart />
</Suspense>

      <Suspense fallback={
        <div className={Styles.continerLoading}>
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
      }>
        <ProductDetilsComponent id={params.id} />
      </Suspense>
    </>
  );
}