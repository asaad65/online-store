import NestedSections from "@/app/component/NestedSections"
import styles from './page.module.css'
import ProdactsCatugre from "@/app/component/ProdactsCatugre";
import { Suspense } from "react";

export default function Home({ params }){
  
    return(
        <>

        <Suspense fallback={<div>Loading sections</div>}>
             <NestedSections/>  
             </Suspense>
        <div className={styles.ProdactsCatugreGred}>
            <ProdactsCatugre params = {params.name} />   
         
        </div>
      
        </>
    )
}