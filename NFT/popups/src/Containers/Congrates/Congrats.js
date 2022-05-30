import React,{useState,useEffect} from "react";
import { Card } from "../../Components/Style";
import "./style.css"

const Congrats = (props) => {
	// console.log(props.message.msg)

	const [isHide, setIsHide] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsHide(false)
		  }, 5000);
	},[])
	const { msg, text } = props.message;
	return (
		<>
		{isHide && (
			<Card>
				<div className="congrats-box">
					<h2>{msg}</h2>
					<p>{text}</p>
				</div>
			</Card>
		)}
		</>
	);
};

export default Congrats;
