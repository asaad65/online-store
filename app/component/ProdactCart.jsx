import '../component_modules/ProdactCart.css'
import Image from 'next/image'
import Link from 'next/link'
import ProductButtons from './ProductButtons'
export default function ProdactCart({product}){
  const finalPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
    return(
          <div className="product-card">
         
         <Link href={`/ProductDetails/${product.id}`} style={{ textDecoration: 'none' }}> 
    <img
      className="product-image"
      src={product.images[0]}
      width={30}
      height={30}
    />
    </Link>
    <div className="product-info">
       <Link href={`/ProductDetails/${product.id}`} style={{ textDecoration: 'none' }}> 
      <div className="product-title">{product.title}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price">{finalPrice}$</div>
      </Link>
      <ProductButtons product = {product} />

    </div>
  

         </div>

    )
 }