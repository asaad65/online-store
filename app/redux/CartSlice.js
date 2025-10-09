import CartLoader from "../component/CartLoder";
const { createSlice } = require("@reduxjs/toolkit");
const SetLocalStoreg = (prodactsCart)=>{
  localStorage.setItem('cart',JSON.stringify(prodactsCart))
}


const CartSlice = createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        AddProduct: (state,action)=>{
           const newProduct = action.payload
            const existingProduct = state.find(p => p.id === newProduct.id)
              if (existingProduct) {
              } else {
                state.push({ ...newProduct })
                SetLocalStoreg(state)
              }
        },
        RemoveProduct: (state,action)=>{
            const {id} = action.payload
           const newstate = state.filter(s=>s.id != id)
           SetLocalStoreg(newstate)
           return newstate
        },
         UpdateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find(p => p.id === id);
      if (product) {
        product.quantity = quantity;
      }
      SetLocalStoreg(state)
    } ,
    clear: (state,action)=>{
      state = []
       SetLocalStoreg(state)
      return state
     
    }
    }
})
export const { AddProduct , RemoveProduct ,UpdateQuantity,clear } = CartSlice.actions
export default CartSlice.reducer
