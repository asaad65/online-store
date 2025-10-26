"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import dynamic from 'next/dynamic';
import '../component_modules/NestedSections.css'
import 'swiper/css';
import 'swiper/css/navigation';

import { useSelector, useDispatch } from "react-redux";
import { Suspense, useEffect, useRef, useState } from 'react';
import { fitchSections } from '@/app/redux/SectionsSlice';
import Link from 'next/link';
 const SectionItem = dynamic(() => import('./SectionItem'), {
  suspense: true
});
export default function Sections() {
  const dispatch = useDispatch();
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [sectionNamePath, setSectionNamePath] = useState(null);
  const { data, loading,error } = useSelector(state => state.DataSections);


  useEffect(() => {
    dispatch(fitchSections());
  }, [dispatch]);


  useEffect(() => {
    if (data.length > 0 && nextRef.current && prevRef.current) {
      setSwiperReady(true);
    }
  }, [data, nextRef.current, prevRef.current]);


  useEffect(() => {
    const path = window.location.pathname;
    const parts = path.split('/');
    setSectionNamePath(parts[2]);
  }, []);

  if(loading) return(<div style={{background:'#ddd',width:'100%',height:'50px',padding:'10px',textAlign:'end'}}>...Loading section</div>)
  if(error) return(<div style={{background:'#ff5b5bff',width:'100%',height:'50px',padding:'10px',textAlign:'end'}}>...An error occurred </div>)
  return (
    <div dir="rtl" style={{ width: '100%', background: '#ddd',height:'100%', position: 'relative', padding: '10px', marginTop: '0' }}>
      <div
        ref={prevRef}
        className="custom-prev"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          height:'100%'
        }}
      >
        <button className='buttonStyle'>Previous</button>
      </div>

     
      <div
        ref={nextRef}
        className="custom-next"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1000,
            height:'100%'
        }}
      >
        <button className='buttonStyle'>Next</button>
      </div>

  
      <div style={{ width: '80%', margin: 'auto' }}>
        {swiperReady && (
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 10 },
              376: { slidesPerView: 3, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 15 },
              768: { slidesPerView: 5, spaceBetween: 10 },
              1024: { slidesPerView: 7, spaceBetween: 10 },
            }}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Navigation]}
          >
              {
                data.map((sect, i) => (
                
                    <SwiperSlide key={i}>

                      <Link href={`/Section/${sect.slug}`} style={{color:'#000',textDecoration:'none'}}>
                        <Suspense fallback={<div style={{ height: '50px', background: '#efefefff', borderRadius: '10px', marginBottom: '15px',display:'flex',justifyContent:'center',alignItems:'center' }}>Loading section...</div>}>
                              <SectionItem name={sect.name} slug={sect.slug} selected={sectionNamePath === sect.slug} mood={'NestedSection'} />
                        </Suspense>
                      </Link>
                    </SwiperSlide>
                
                ))
              }



          </Swiper>
        )}
      </div>
    </div>
  );
}
