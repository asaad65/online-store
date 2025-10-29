 "use client"
import { Suspense, useEffect } from 'react'
 import '../component_modules/Sections.css'
 import { useSelector,useDispatch } from 'react-redux'
import { fitchSections } from '../redux/SectionsSlice'
import Link from 'next/link'

//   swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay,Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import dynamic from 'next/dynamic'
 const SectionItem = dynamic(() => import('./SectionItem'), {
  suspense: true
});
export default function Sections(){
    const dispatch = useDispatch()
    const {data,loading,error} = useSelector(state =>state.DataSections )
      const selectMood = useSelector(state => state.Mood.value) 
    useEffect(() => {
      dispatch(fitchSections());
}, []);

    console.log('sections')
    console.log(data)
    return(
          <div style={{position:'relative'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',position:'absolute'}}>
                  <div className="custom-prev" ><img src="\icons\arrow_circle_right.svg" alt="Previous" /></div>
                  <div className="custom-next"><img src="\icons\arrow_circle_left.svg" alt="Next" /></div>
            </div>
          
           <div style={{background:'orange',width:'100%',height:'50px',marginTop:'10px',display:'flex',justifyContent:'center',alignItems:'center',color:'#000', fontSize:'30px'}}>
             Sections
             
          </div>
      
      
<Swiper
  
  slidesPerView={4}
  spaceBetween={10}
  breakpoints={{
    0: { slidesPerView: 2, spaceBetween: 5 },
    300: { slidesPerView: 2.5, spaceBetween: 10 },
    360: { slidesPerView: 3.5, spaceBetween: 10 },
    414: { slidesPerView: 3.5, spaceBetween: 15 },
    480: { slidesPerView: 4, spaceBetween: 15 },
    640: { slidesPerView: 4, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 30 },
    1024: { slidesPerView: 6, spaceBetween: 30 },
  }}
    navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  }}
   modules={[Pagination, Autoplay, Navigation]}
>


               {
                  
                  loading?(
                        <div style={{ width: '100%', height: '100px', background: '#ddd',display:'flex',justifyContent:'center',alignItems:'center',color:'#000000ff',fontSize:'20px' ,borderRadius: '8px',marginTop:'10px' }}>Loading sections</div>
                ):error?(
                        <div style={{ width: '100%', height: '100px', background: '#f8d7da',display:'flex',justifyContent:'center',alignItems:'center',color:'#000000ff',fontSize:'20px' ,borderRadius: '8px',color:'#721c24' ,marginTop:'10px'}}>An error occurred</div>
                  ):(
                   data.map((section,i) =>{
                     return(
                          <SwiperSlide key={i}>
                            <Link href={`/Section/${section.slug}`} style={{color:'#000',textDecoration:'none'}}>
                             
                              <Suspense fallback={<div style={{ height: '150px',width:'150px', background: '#efefefff', borderRadius: '50%', marginBottom: '15px' ,display:'flex',justifyContent:'center',alignItems:'center'}}>...Loading section</div>}>
                         <div className={'Section'}>
                              <SectionItem name={section.name} slug={section.slug} mood={'SectionPro'} />
                        </div>
                        </Suspense>
                        
                        </Link>
                        </SwiperSlide>
                     )
                  })
                  )
               }
</Swiper>
               
          </div>
     
    )
}