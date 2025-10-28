import Cart from './component/Cart';
import Slider from './component/Slider';
import styles from './page.module.css';
import 'material-symbols';
import Sections from './component/Sections';
import Link from 'next/link';
import AnimateOnScroll from './component/AnimateOnScroll';



export default  function Home() {
  
   let opjectIcon = [
    {
      imge:'/icons/family.svg',
      name:'Family shopping'
    },
     {
      imge:'/icons/temp_preferences.svg',
      name:'Greater savings'
    },
     {
      imge:'/icons/shield_person.svg',
      name:'Your information is protected'
    },
  ]

  return (
    <>
   
     <div className={styles.bodyImge}>
      <Cart /> 



 <AnimateOnScroll direction="up" delay={0.2}>


                  <div style={{color:'#fff', width:'100%', textAlign:'center',marginTop:'40px'}}>
            <h1 className={styles.H1Size}>.We dont sell products, we provide solutions that make a difference</h1>
            <p className={styles.PSize} style={{
            color: '#fff',
            marginTop: '15px',
            maxWidth: '600px',
            lineHeight: '1.6',
            textAlign:'center',
            margin:'auto'
            }}>
            We help you achieve tangible results through technical and business solutions tailored to your needs.
Quality, speed, and ongoing support are the foundation of our business.
            </p>
            <Link href={'/ProductAll'}>
             <button className={styles.Order} style={{
            backgroundColor: '#ff6600',
            color: '#fff',
           
            fontSize: '18px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
           Order now
            </button>
            </Link>
           

            </div>
            </AnimateOnScroll>
         </div>


           <AnimateOnScroll direction="left" delay={0.2}>
          <Slider params='sports-accessories' />
           </AnimateOnScroll>
      <AnimateOnScroll direction="up" delay={0.2}>
      <div
        className={styles.contenrSlide}>
        {opjectIcon.map((elemint,index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          
            <img src={elemint.imge} className={styles.Icon}>
            </img>
            <h3 className={styles.name}>{elemint.name}</h3>
            {index < 2 && (
              <div
              className={styles.hr}></div>
            )}
          </div>
        ))}
      </div>
      </AnimateOnScroll>
  <AnimateOnScroll direction="up" delay={0.2}>
  <div className={styles.contenrimge}>


  
    <div className={styles.HoverImg}>
         <div  className={styles.AfterImg}>
            <img src='\imgs\istockpho.webp' className={styles.imgcatugre}></img>
         </div>
    </div>
 
    <div className={styles.HoverImg1}>
         <div  className={styles.AfterImg1}>
            <img src='\imgs\istockphoto.webp' className={styles.imgcatugre}></img>
         </div>
    </div>
    
  </div>
</AnimateOnScroll>
<AnimateOnScroll direction="left" delay={0.2}>
          <Slider params = 'smartphones' />
</AnimateOnScroll>
    <AnimateOnScroll direction="up" delay={0.2}>
     <Sections/>
    </AnimateOnScroll>
<AnimateOnScroll direction="left" delay={0.2}>
        <div dir='ltr'  className={styles.continerImgParg}>
            <div dir='ltr' className={styles.Parg}>
              Welcome to our online store, your first destination for easy and convenient shopping from anywhere, anytime. We offer a variety of carefully selected products to suit all tastes and needs. Browse the sections, view the images, and read the details to make a confident purchase decision. Payment is secure and fast, and delivery arrives professionally right to your door.

            </div>
            <img src='\imgs\prod.png'className={styles.imgWidth}></img>
        </div>
  </AnimateOnScroll>
      
    </>
  );
}