
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

export const fitchProductSectionSlice = createAsyncThunk(
  'ProductSections',
  async (params) => {
    const res = await fetch(`https://dummyjson.com/products/category/${params}`);
    const data = await res.json();
    return data.products;
  }
);

const initialState = {
  data: {},      
  loading: {},   
  error: {}       
};

export const ProductSectionSlice = createSlice({
  name: 'ProductSections',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fitchProductSectionSlice.pending, (state, action) => {
        const category = action.meta.arg;
        state.loading[category] = true;
        state.error[category] = null;
      })
      .addCase(fitchProductSectionSlice.fulfilled, (state, action) => {
        const category = action.meta.arg;
        state.loading[category] = false;
        state.data[category] = action.payload;
      })
      .addCase(fitchProductSectionSlice.rejected, (state, action) => {
        const category = action.meta.arg;
        state.loading[category] = false;
        state.error[category] = 'An error occurred';
      });
  }
});

export default ProductSectionSlice.reducer;