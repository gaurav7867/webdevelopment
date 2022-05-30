import styled from "styled-components";

 
export const Card = styled.div `
    top: 40px;
	left: 473px;
	width: 492px;
	height: 200px;
	background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 10px;
	opacity: 1;
`
export const Button = styled.button `  
  font-size: 1em;
  cursor: pointer;
  margin: 1em;
  padding: 5px 25px;
  border: 2px solid black;
  background: ${props => props.danger ? " #FC4448" : "white"};
  color: ${props => props.danger ? "white" : "black"};
  font-weight: bold;
  border:${props => props.none ? "none":"2px solid #FC4448"};

  &:hover {
    background-color: ${props => props.dark ? " #1A1D1F" : " "};
    color:#ffff;
  }

`
export const Sidebar = styled.div`
     height:55vh;
     width:8vw;
     background-color:#F4F4F4;
     border-radius:10px;
`

export const IconWrapper = styled.div`
     margin-left:20px;
     

   
`
