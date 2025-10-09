"use client"
import { Suspense, useEffect, useState } from "react"
import { fitchProdacts } from "../redux/ProductsSlice"
import { useDispatch, useSelector } from "react-redux"
import styles from './page.module.css'
import Cart from "../component/Cart"
import dynamic from "next/dynamic"
 const ProdactCart = dynamic(() => import('../component/ProdactCart'), {
  suspense: true
});
export default function ProductAll() {
  const [skip, Setskip] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fitchProdacts(skip))
  }, [skip])

  const { data, loading, error, total } = useSelector(state => state.Prodacts)

  const handleNext = () => {
    if (skip + 6 < total) {
      Setskip(prev => prev + 6)
    }
  }

  const handlePrev = () => {
    if (skip > 0) {
      Setskip(prev => prev - 6)
    }
  }

  const currentPage = Math.floor(skip / 6) + 1
  const totalPages = Math.ceil(total / 6)

  const getVisiblePages = () => {
    const pages = []
    const start = Math.max(currentPage - 1, 1)
    const end = Math.min(start + 2, totalPages)

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <>
    <Cart />
    <div style={{width:'100%',height:'100px'}}></div>
      
        {loading ? (
            <div  style={{ height: '400px', width: '100%', marginBottom: '10px',display:'flex',justifyContent:'center',alignItems:'center' }}>loading Prudacts</div>
        ) : error ? (
          <>
          <div  style={{ background: '#ff9090ff', height: '400px', width: '100%', marginBottom: '10px',display:'flex',justifyContent:'center',alignItems:'center' }}>An error occurred</div>
          
          </>
        ) : Array.isArray(data) ? (
          <div className={styles.contener}>
          {data.map(p => (
         
            <Suspense key={p.id} fallback={ <div style={{ height: '350px', background: '#efefefff', borderRadius: '10px', marginBottom: '15px',display:'flex',justifyContent:'center',alignItems:'center' }}>
             ...loading Prudact
      </div>}>
            <ProdactCart  product={p}/>
            </Suspense>
            
          ))}
         </div>
        ) : (
          <p>No products found.</p>
        )}
    

      <div className={styles.pagination}>
        {currentPage > 1?(
          <button className={styles.pagebtn} onClick={handlePrev}>Previous</button>
        ):(
          <button style={{ padding: '8px 16px',backgroundColor: '#7e7e7eff',color:'white',border: 'none',cursor:'no-drop' ,borderRadius: '4px'}}>Previous</button>

        )}

        {getVisiblePages().map(page => (
          <span
            key={page}
            className={styles.pagenumbers}
            style={{
              padding: '9px',
              background: page === currentPage ? '#ff7327' : 'transparent',
              cursor: 'pointer',
                borderRadius:'30px'
            }}
            onClick={() => Setskip((page - 1) * 6)}
          >
            {page}
          </span>
        ))}

        {currentPage < totalPages ? (
          <button className={styles.pagebtn} onClick={handleNext}>Next</button>
        ):(
          <button style={{ padding: '8px 16px',backgroundColor: '#7e7e7eff',color:'white',border: 'none',cursor:'no-drop' ,borderRadius: '4px'}}>Next</button>

        )}
      </div>
    </>
  )
}