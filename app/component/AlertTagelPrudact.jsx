"use client"
import { useSelector } from "react-redux"
import '../component_modules/AlertTagelPrudact.css'
export default function AlertTagelPrudact(){

const AlertValue = useSelector(state => state.Aleart.tagel)
    return(
        <div className="Alert" style={{display:AlertValue?'flex':'none'}} >
            The operation was completed successfully
        </div>
    )
}