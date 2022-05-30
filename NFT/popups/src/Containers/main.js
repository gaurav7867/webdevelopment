import React from 'react'
import {ConfirmData,BidData, UpdatingItem, Approved ,Decline } from "../Data"
import UpdateItemPopup from "../Containers/UpdateItemPopup/index"
import AprrovePopup from "../Containers/ApprovedPopup/Approve"
import DeclinePopup from "../Containers/DeclinePopoup/Decline"
import CongratsPopup from "../Containers/Congrates/Congrats"
import ConfirmModal from "../Containers/Modals/ConfirmModal";
import BidModal from "./Modals/BidModal";
import Confirm from "./Confirm/Confirm";
import Actions from "./SideActions/Action"


const Main = () => {
    return (
        <div style ={{display: 'flex'}}>
           {/* <ConfirmModal Data ={ConfirmData}/>  */}
           {/* <BidModal Data = {BidData}/> */}
            <div style={{width:"100%",marginLeft:"35%"}}><br/><br/>
              {/* <UpdateItemPopup Data ={UpdatingItem}/><br/>
              <AprrovePopup Data ={Approved} /><br/>
              <DeclinePopup Data ={Decline}/><br/>
              <CongratsPopup message ={{msg:"Congratulations" ,text :"The item is now yours."}}/> <br/> */}
            <Confirm/><br/>
            {/* <Actions/> <br/> */}
            </div>
              
        </div>
    )
}

export default Main;
