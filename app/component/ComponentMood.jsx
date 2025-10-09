'use client'
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { SetMood } from "../redux/moodSlice"
export default function ComponentMood(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(SetMood('Light'))
    },[])
    const SelectMood = useSelector(state => state.Mood.value)
     function handelMood(){
        if(SelectMood == 'Light'){
            dispatch(SetMood('dark'))
        }else{
            dispatch(SetMood('Light'))
        }
     }
    return(
        <button style={{cursor:'pointer',color:`${SelectMood != 'dark'?'#000':'#fff'}`,paddingBlock:'5px',paddingInline:'5px',border:'1px solid #000',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',background:`${SelectMood == 'dark'?'#000':'#fff'}`}} onClick={handelMood} >{SelectMood}{(SelectMood == 'dark'?(<img style={{width:'17px'}} src={'/imgs/nightlight.png'}></img>):(<img style={{width:'17px'}} src={'/imgs/sunny.png'}></img>))}</button>
      
    )
}
