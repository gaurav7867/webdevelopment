import React from "react";
import "./ActionStyle.css";
import { Sidebar, IconWrapper } from "../../Components/Style";
import { Avatar } from "antd";
import {
	SettingOutlined,
	BellOutlined,
	UsergroupAddOutlined,
	AntDesignOutlined,
} from "@ant-design/icons";

const Action = () => {
	return (
		<>
			<Sidebar style ={{xs: 24, sm: 32, md: 40, lg: 64, xl: 100, xxl: 100}}>
				<IconWrapper>
					<Avatar
						size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
						className='avatar'
                        id="setting"
						icon={<SettingOutlined className= "icon"/>}
					/>
					<Avatar
						size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
						className='avatar medium'
						icon={<UsergroupAddOutlined className= "icon" />}
					/>
					<Avatar
						size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
						className='avatar medium'
						icon={<BellOutlined  className= "icon"/>}
					/>
					<div>
						<Avatar
							size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}	
                            className='avatar'					
							icon={<AntDesignOutlined className= "icon" id ="AntIcon"/>}
						/>
					</div>
				</IconWrapper>
			</Sidebar>
		</>
	);
};

export default Action;
