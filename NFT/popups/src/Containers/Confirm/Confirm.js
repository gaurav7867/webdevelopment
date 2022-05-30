import React ,{useState} from "react";
import { Card, Button } from "../../Components/Style";
import { Popconfirm, Typography, message, Row, Col } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import "./confirm.css";

const { Title } = Typography;

const Confirm = () => {

     const [isHide, setIsHide] = useState(true)

	function remove(e) {
		message.warning("Click on Yes");
	}

	function cancel(e) {
		message.error("Click on No");
        setIsHide(false);
	}

	return (
		<div className='card-wrapper'>
        {isHide && (
			<Card className='confirm-card'>
				<Row>
					<Col
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							margin: "20px auto",
						}}
					>
						<WarningOutlined id='icon' />
						<Title level={5}>
							Are you sure you want to remove <br /> NFT Agency?
						</Title>
					</Col>
					<Col
						style={{
							display: "flex",
							flexDirection: "row",
							margin: "0px 55px",
						}}
					>
						<Button dark onClick ={cancel}>Cancel</Button>
						<Button  dark danger onClick ={remove}>
							Remove
						</Button>
					</Col>
				</Row>
			</Card>
        )}
		</div>
	);
};

export default Confirm;
