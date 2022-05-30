import React, { useState } from "react";
// import {Button}  from "../Style"
import { Modal, Card, Button, Row, Col, Avatar, Typography, Input } from "antd";

const { Title, Text } = Typography;

const BidModal = (props) => {
	  console.log(props.Data)

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div>
			<Button type='primary' onClick={showModal}>
				Bid Modal
			</Button>
			<Modal
				title='Confirmation'
				visible={isModalVisible}
				onBuy={handleOk}
				onCancel={handleCancel}     
			>
				<Card style={{ marginTop: 16, marginBottom: 20 ,border:"1px solid #999B9E",borderRadius:"10px"}}>
					<Row gutter={[16, 16]}>
						<Col>
							<Avatar shape='square' size={74} style ={{backgroundColor:" #999B9E"}} />
						</Col>
						<Col>
							<Title level={4}>Name of Piece</Title>
							<Text>Creator - Agency</Text>
						</Col>
					</Row>
				</Card>
				<Input.Group size='large'>
					<Row gutter={8}>
						<Col span={19}>
						   <Text level = {4} style={{color: ' #1A1D1F' ,fontWeight: "bold"}}>Enter your bid...</Text>
						</Col>
						<Col span={5}>
							<Input defaultValue='10,000'  style ={{border: '1px solid red',borderRadius: '10px',color:"#1A1D1F",fontWeight: "bold"}} />
						</Col>
					</Row>
				</Input.Group>
                <hr style ={{width:"50%",marginLeft:"-1px"}}/>
			<div >
            {props.Data.map((item, i) => {
                    const { piecetitle, price,Cprice,Dprice, creatorRoyality, DaamFee } = item;
                    return (
                    <>
                        <Row
                        style={{
                            display: "flex",
                            flexDirection: "Column",
                            marginBottom: "20px"
                        }}
                        >
                        <Col>
                            <Row gutter={[372, 372]}>
                            <Col>
                                {" "}
                                <Text>{piecetitle}</Text>{" "}
                            </Col>
                            <Col>
                                {" "}
                                <Text>{price}</Text>{" "}
                            </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row gutter={[295, 300]}>
                            <Col>
                                {" "}
                                <Text>{creatorRoyality}</Text>{" "}
                            </Col>
                            <Col>
                                {" "}
                                <Text>{Cprice}</Text>{" "}
                            </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row gutter={[345, 345]}>
                            <Col>
                                {" "}
                                <Text>{DaamFee}</Text>{" "}
                            </Col>
                            <Col>
                                {" "}
                                <Text>{Dprice}</Text>{" "}
                            </Col>
                            </Row>
                        </Col>
                        </Row>
                    </>
                    );
                })}  
            </div> 
				<hr />
				<Row gutter={[375, 375]}>
					<Col>
						<Title level={5}>Total</Title>
					</Col>
					<Col>
						<Text></Text>
					</Col>
				</Row>
			</Modal>
		</div>
	);
};

export default BidModal;
