'use client'
import Link from 'next/link';
import '../component_modules/NavPar.css'
import Image from 'next/image';
import ComponentMood from './ComponentMood.jsx';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
export default function NavPar() {
 const router = useRouter();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [ValueInput , SetValueInput] = useState('');
  const isFirstRender = useRef(true);   

  const handelSearch = () => {
    router.push(`/Search?title=${ValueInput}`);
  };

  const handelSearchMobail = () => {
    setIsSearchActive(true);
    router.push(`/Search?title=${ValueInput}`);
  };

  const handelPage = () => {
    setIsSearchActive(false);
    router.push('/');
   
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; 
    }
    router.push(`/Search?title=${ValueInput}`);
  }, [ValueInput]);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== '/Search') {
      setIsSearchActive(false);
    }
  }, [pathname]);


  return (
    <div
    className='ResponseNav'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'orange',
        padding: '10px 15px',
        
        direction: 'ltr',
        width: '100vw',
        boxSizing: 'border-box',
        gap: '10px',
        position: 'sticky',
        top:'0',
        zIndex: '10000',
        paddingInline: '25px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      
        <div
          className="search-box"
        >
          <input type="text" dir='ltr' placeholder="Search here..." onClick={()=>{handelSearch()}} value={ValueInput} onChange={(target)=>{SetValueInput(target.target.value)}} />
          <button>
            <Image
              src="/icons/search.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>
        
         
         
         {isSearchActive && (
             <div
          className="search2-box"
          style={{display:'flex',width:'100vw',position:'fixed',left:'0',right:'0px'}}
        >
          <div style={{width:'20px'}}></div>

          <input type="text" dir='ltr' placeholder="Search here..." value={ValueInput} onChange={(target)=>{SetValueInput(target.target.value)}} />
          
           <button onClick={handelPage} style={{marginRight:'10px',width:'35px',height:'35px',padding:'5px',border:'none',borderRadius:'50%',background:'#e8e5e5ff',position:'absolute',right:'0px',top:'3px',fontSize:'22px',cursor:'pointer'}}>→</button>
              
        
          
          </div>

         )}
           
         

      
          <div className='serchIcon' onClick={()=>{handelSearchMobail()}}>
            <Image
              src="/icons/search.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
      

        <div>

          <ComponentMood />
 
        </div>
      </div>

    
        <div>
          <Link href={'/'}>
            <Image
              src={"/imgs/logo-white.png"}
              width={140}
              height={30}
              alt='logo'
              className='imgLogo'
            />
          </Link>
        </div>
    
    </div>
  );
}
