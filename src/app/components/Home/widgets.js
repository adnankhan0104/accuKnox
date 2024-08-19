"use client";

import { Box, styled, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { data2 } from "../../constants/data2";
import Addwidget from "./Addwidget";
import { DataContext } from "@/app/context/DataContext";

const Wrapper = styled(Box)`
  width: 330px;
  border-radius: 10px;
  display:flex;
  // height: 185px;
`;

const Data = styled(Typography)`
  display: flex;
  justify-content: center;
  margin-top: 65px;
`;

const Widget = styled(Box)`
background-color: white;
    width: 416px;
    height: 200px;
    border-radius: 15px;
    margin-left:15px;
    cursor:pointer;
    // display:flex
`

const CrossIcon = styled(Box)`
background: #ddd;
    width: 9px;
    position: relative;
    left: 382px;
    bottom: 23px;
    border-radius: 68px;
    color: black;
`
const Widgets = () => {
    const {newWidget} = useContext(DataContext)
    const [isVisible1,setIsVisible1] = useState(true)
    const [isVisible2,setIsVisible2] = useState(true)
    const [isVisible3,setIsVisible3] = useState(true)
    // const [id,setId] = useState(0)
    let data
    for(let i=0; i<data2.length; i++){
         data = data2[i].widgets
    }
    const [state, setState] = useState(data)
    let id = 0;
    const handleClick=(e)=>{
    //  console.log(e)
    
      `setIsVisible${e}`(false)
    }
   
  return (
    <Box style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {data2.map((obj, index) => {
       
        return (
          <>
            <Wrapper>
              <Box>
                <Box>
                  <Typography style={{ fontWeight: "600", fontSize: "17px" }}>
                    {obj.title}
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eaeff6;", display:"flex" ,gap:"2.5rem"}}>
                    { 
                    state.map((widget,index)=>{
                        return <>
                        {
                         `isVisible${index+1}` && <Widget>
                             <Typography style={{ padding:"5px",fontWeight: "600", fontSize: "14px" }}>
                    {/* {obj.widgets[`widget_${index}`].title} */}
                    {widget.title}
                  </Typography>
                    <CrossIcon onClick={()=> handleClick(index+1)}>x</CrossIcon>
                  {/* <Data>{obj.widgets[`widget_${index}`].data}</Data> */}
                  <Data>{widget.data}</Data>
                  </Widget>}
                  {/* <Addwidget/> */}
                        </>
                    })
                //   <Typography style={{ fontWeight: "600", fontSize: "14px" }}>
                //     {/* {obj.widgets[`widget_${index}`].title} */}
                //     {obj.widgets[index].title}
                //   </Typography>
                //   {/* <Data>{obj.widgets[`widget_${index}`].data}</Data> */}
                //   <Data>{obj.widgets[index].data}</Data>
                    
                }
                <Addwidget data={obj}/>
                </Box>
              </Box>
            </Wrapper>
          </>
        );
      })}
    </Box>
  );
};

export default Widgets;
