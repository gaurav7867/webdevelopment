import React,{useState} from 'react'
import {Card} from "../../Components/Style"
import { CloseOutlined } from '@ant-design/icons';
import "./style.css"

const Decline = (props) => {
    // console.log(props)
    const [show , setShow] = useState(true);

    const Visible = () =>  {
        setShow(false);
    }
  return (
    <>
    {show && 
        <Card>
            {props.Data.map((item) =>{
                const {heading, text} = item
                return (
                    <>
                        <div className ="decline-box" >
                            <CloseOutlined id= "decline" onClick = {Visible}  />
                            <h2>{heading}</h2>
                            <p>{text}</p>
                        </div>
                    </>
                )
            })}
        </Card>
    }
     {/* <button onClick={() => setShow(true)}>SHow</button> */}
    </>
  )
}

export default Decline