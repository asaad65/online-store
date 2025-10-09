const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");


 export const fitchProdacts = createAsyncThunk('Prodacts', async ( params , { rejectWithValue })=>{
    try{
    const response =  await fetch(`https://dummyjson.com/products?limit=6&skip=${params}`)
    const value = await response.json()
    
          return {
        products: value.products,
        total: value.total
      };
    }catch (error){
     return rejectWithValue(error.masseg || 'Unknown error')
    }
})
let initialState = {
    data: [],
    loading: false,
    total: 0,
    error: null
   
}

export const prodactsSlice = createSlice({
    name:'Prodacts',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fitchProdacts.pending,(state)=>{
            state.loading = true
        })
        .addCase(fitchProdacts.fulfilled,(state,action)=>{
           state.data = action.payload.products
           state.total = action.payload.total
           state.loading = false
        })
        .addCase(fitchProdacts.rejected,(state,action)=>{
           state.error = action.payload 
           state.loading = false

        })
    }
})
export default prodactsSlice.reducer


