const {createSlice } = require("@reduxjs/toolkit");
const  initialState ={
    tagel:false
}
const AlertTagelPrudactSlice = createSlice({
    name:'Alert',
    initialState,
    reducers:{
        AlertTagel: (state,action)=>{
          state.tagel = true
        },
        AlertTagelOff: (state) => {
          state.tagel = false;
        }
    }
})
export const {AlertTagel,AlertTagelOff} = AlertTagelPrudactSlice.actions
export default AlertTagelPrudactSlice.reducer