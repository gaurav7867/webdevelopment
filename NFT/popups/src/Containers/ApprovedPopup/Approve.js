import React,{useState} from 'react'
import {Card} from "../../Components/Style"
import { CheckOutlined } from '@ant-design/icons';
import "./style.css"

const Approve = (props) =>{
    // console.log(props.Data)

    const [isShow, setIsShow] =useState(true)
  return (
    <>
    {isShow && (
     <Card>
        {props.Data.map((item) =>{
            const {heading, text} = item
            return (
                <>
                    <div className ="approve-box">
                        <CheckOutlined id ="checkIcon" onClick ={()=>setIsShow(false)} />
                        <h2>{heading}</h2>
                        <p>{text}</p>
                    </div>
                </>
            )
        })}

     </Card>
    )}
    </>
  )
}

export default Approve;