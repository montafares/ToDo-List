import DatePicker from "react-date-picker";

import styled from "@emotion/styled";
export const Wrapper = styled.div`
  border: 3px solid #3d3d3d;
  margin-top: 58px;
  margin-left: 124px;
  width: 438px;
  height: 653
  
  80px;
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.1) 73.15%
  );
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
`;
export const Button = styled.button`
  border-radius: 5px;
  color: yellow;
  border: 2px solid yellow;
  background-color: transparent;
  margin : 50px;
  width: 325px;
  height: 50px;
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 400;
  
  `;
export const Title = styled.div`
  text-align: center;
  font-family: "Montserrat";
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.9);
`;
export const ToDolistinput = styled.input`
  color: rgba(33, 33, 33, 0.7);
  text-align: center;
  font-family: "Montserrat";
  font-size: 18.22px;
  font-weight: 300;
  width: ${(props) => {
    if (props.width === "width_search") {
      return "380px";
    }
    if (props.width === "width") {
      return " 237px";
    } else {
      return "112px";
    }
  }};
  
  height: 35px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  margin-top: ${(props) => (props.top === "top" ? "25px;" : "0px")};
  margin-right: ${(props) => (props.right === "right" ? "0px;" : "10px")};
  margin-left: ${(props) => (props.left === "left" ? "25px;" : "10px")};
`;
export const Field = styled.input`
  color: rgba(33, 33, 33, 0.7);
  text-align: center;
  font-family: "Montserrat";
  font-size: 18.22px;
  font-weight: 300;
  background-color: rgba(255, 255, 255, 0.6);
 margin-top: 25px;
  margin-left: 25px;
  width: 240px;
  height: 35px;
  margin-right: 25px;
`;
export const AddTods = styled.button`
  border-radius: 5px;
  margin-right: 10px;
  color: yellow;
  border: 2px solid yellow;
  background-color: transparent;
  width: 112px;
  height: 39px;
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 400;
`;
export const Displaylist = styled.span`
  justify-content: center;
  display: ${(props) =>
    props.inline === "inline" ? "inline-block" : "contents"};
  padding-top: 7px;
  border-radius: 3px;
  background: ${(props) =>
    props.back === "back" ? "var(--Gold, #ffd700)" : "#000"};
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  height: 30px;
  width: ${(props) => (props.width === "width" ? "265px" : "34px")};
  color: ${(props) =>
    props.color === "color" ? "rgba(255, 255, 255, 0.9)" : "#000"};
  font-family: "Calibri_Bold";
  font-size: 20px;
  font-weight: 500;
`;
export const Calend = styled.span`
margin-left: auto;
justify-content: center;
  margin-right: 30px;
  text-align: center; 
  color : rgba(255, 255, 255, 0.9);
   font-family: "Calibri_Bold";
  font-size: 17px;
  font-weight: 300;
  
`;
export const Tap = styled.button`
  align-items: center;
  margin-left: ${(props) => (props.left === "left" ? "29px;" : "0px")};
  width: 190px;
  height: 36px;
  color : #000;
  font-family: "Calibri_Bold";
  font-size: 20px;
  font-weight: 300;
  background-color: steelblue;
`;
export const Index = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 380px;
  height: 36px;
  flex-shrink: 0;
  list-style: none;
  border-bottom: 1px solid yellow;
  margin-right: 30px;
  padding: 15px;
`;
export const Container = styled.div`
  ul {
    overflow: auto;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  margin-left: 23px;
  flex-direction: column;
  align-items: center;
  width: 385px;
  height: 450px;
`;
export const Eclipse = styled.img`
  position: absolute;
  bottom: ${(props) => (props.bottom === "bottom" ? "!0" : "0")};
  left: 0;
  z-index: -1;
  border-radius: 30px;
  width: ${(props) => (props.width === "width" ? "170px" : "439px")};
  height: ${(props) => (props.height === "height" ? "170px" : "439px")};
  flex-shrink: 0;
`;
// export const Day = styled.span`
//   color: rgba(255, 255, 255, 0.9);
//   font-family: "Montserrat";
//   font-size: 14px;
//   font-weight: 400;
//   margin-bottom: 10px;
//   margin-left: 150px;
// `;