"use client";

import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fitchProductSectionSlice } from "../redux/ProductSectionSlice";


const ProdactCart = lazy(() => import("@/app/component/ProdactCart"));

export default function ProdactsCatugre({ params }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.ProductSections);
  const products = data?.[params] || [];
  const isLoading = loading?.[params];
  const hasError = error?.[params];

  useEffect(() => {
    if (params && !data?.[params]) {
      dispatch(fitchProductSectionSlice(params));
    }
  }, [params, dispatch, data]);


  if (isLoading) {
    return (
      <div style={{ textAlign: 'end',width:'100%', padding: '30px', fontWeight: 'bold' }}>
       ...Loading products
      </div>
    );
  }

  if (hasError) {
    return (
      <div style={{ color: 'red', textAlign: 'end', padding: '20px' }}>
       An error occurred while loading the products.
      </div>
    );
  }

  return (
<>
      {products.map(p => (
          <Suspense
          key={p.id}
    fallback={
      <div style={{ height: '350px',width:'100% !mportant', background: '#ebebebff', borderRadius: '10px', marginBottom: '15px',display:'flex',justifyContent:'center',alignItems:'center' }}>
       ...Loading product
      </div>
    }
  >
        <div  style={{ margin: '20px 10px' }}>
          <ProdactCart product={p} />
        </div>
          </Suspense>
      ))}
   </>
  );
}
