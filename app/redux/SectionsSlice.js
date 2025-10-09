const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

export const fitchSections = createAsyncThunk('DataSections',async ()=>{
  const response = await fetch('https://dummyjson.com/products/categories')
   const categories = await response.json()
   return categories
})
const initialState = {
    data:[],
     loading:false,
    error:null

}
const SectionsSlice = createSlice({
    name:'DataSections',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fitchSections.pending,(state)=>{
          state.loading = true
        })
        .addCase(fitchSections.fulfilled,(state,action)=>{
          state.loading = false
          state.data = action.payload
        })
        .addCase(fitchSections.rejected,(state,action)=>{
          state.loading = false
          state.error  = 'Unknown error'
        })
    }
})

export default SectionsSlice.reducer