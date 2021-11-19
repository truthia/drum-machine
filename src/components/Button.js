import {useEffect, useState} from "react";
import "./Button.css"

function Button(props){
    const [color,setColor]=useState({});
    function clickHandler(){
        props.clickKeyHandler(props.eventCode);
       
    }
    function styleHandler(event){
        if(event.keyCode==props.eventCode){
           setColor({backgroundColor:"orange"});
           setTimeout(()=>{setColor({backgroundColor:"purple"})},100);
        }
    }
    useEffect(()=>{
        window.addEventListener("keydown",styleHandler);
        return ()  =>{
            window.removeEventListener("keydown",styleHandler)
        }
    },[]);
    return(
        <li key={props.name}><button style={color} className="drum-pad" id={props.name}
           onClick={clickHandler}
        >{props.name}</button></li>
    );
}

export default Button;