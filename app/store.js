import { configureStore } from '@reduxjs/toolkit'
import  ProdactsReduser  from './redux/ProductsSlice'
import SectionsReduser from '../app/redux/SectionsSlice.js'
import ProductSectionsReduser from '@/app/redux/ProductSectionSlice'
import CartReduser from './redux/CartSlice'
import MoodReduser from '../app/redux/moodSlice'
export default configureStore({
  reducer: {
    Prodacts: ProdactsReduser,
    DataSections:SectionsReduser,
    ProductSections:ProductSectionsReduser,
    CartProduct:CartReduser,
    Mood:MoodReduser  
  }
})
