
"use client"
import React, { useEffect } from 'react';
import {Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../component_modules/Slider.css';
import { Suspense } from 'react';
import { fitchProductSectionSlice } from '../redux/ProductSectionSlice';
import dynamic from 'next/dynamic';
const ProdactCart = dynamic(() => import('./ProdactCart'), {
  suspense: true,
});
export default function Slider({ params }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.ProductSections);
  useEffect(() => {
    if (params && !data?.[params]) {
      dispatch(fitchProductSectionSlice(params));
    }
  }, [params, dispatch, data]);

  const products = data?.[params] || [];
  const isLoading = loading?.[params];
  const hasError = error?.[params];

  return (
   <>
    <div style={{background:'orange',width:'100%',fontSize:'30px',textAlign:'center',marginTop:'10px',paddingBlock:'7px'}}>
           {
           isLoading?(<div>Loading section name</div>):hasError?(<div>An error occurred</div>):(
            <div>{params}</div> 
           )
           }
    </div>
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 10 },
        360: { slidesPerView: 2, spaceBetween: 10 },
        414: { slidesPerView: 2, spaceBetween: 15 },
        480: { slidesPerView: 2, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      style={{marginBlock:'10px'}}
    >
      {hasError ? (
        <div style={{ width: '100%', height: '350px', background: '#f8d7da',display:'flex',justifyContent:'center',alignItems:'center',color:'#721c24',fontSize:'20px',borderRadius: '8px'  }}>{hasError}</div>
      ) : isLoading ? (
       
          
            <div style={{ width: '100%', height: '350px', background: '#ddd',display:'flex',justifyContent:'center',alignItems:'center',color:'#000000ff',fontSize:'20px' ,borderRadius: '8px' }}>...Loading products</div>
       
        
      ) : (
        products.map((product) => (
          <SwiperSlide key={product.id}>
            <Suspense
      fallback={
        <div style={{
          width: '302.5px',
          height: '350px',
          background: '#efefef',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          color: '#666'
        }}>
          ...Loading product
        </div>
      }
    >

            <ProdactCart product={product} />
            </Suspense>
          </SwiperSlide>
        ))
      )}
    </Swiper>
    </>
  );
}