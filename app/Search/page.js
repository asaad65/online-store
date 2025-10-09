'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProdactCart from '../component/ProdactCart';
import styles from './page.module.css'
export default function SearchQueryPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!title) return;
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${title}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.products || []);
        setLoading(false);
      });
  }, [title]);
    return (
    <>
      {!title ? (
        <p style={{fontSize:'20px',textAlign:'center'}}>.Please enter a search term</p>
      ) : loading ? (
        <p style={{fontSize:'20px',textAlign:'center'}} >...Loading results</p>
      ) : results.length === 0 ? (
        <p style={{fontSize:'20px',textAlign:'center'}}>.No matching results found</p>
      ) : (
         <div className={styles.continerProdactsSearch}>
          {results.map(product => (
                 <ProdactCart product={product} key={product.id}/>
          ))}
         </div>
      )}
    </>
  );
}