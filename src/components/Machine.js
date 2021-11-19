import { useEffect, useState } from "react";
import "./Machine.css";
import Button from "./Button";

const buttons=[
   {eventCode:81,name:"Q",des:"It's coming!", song:"https://docs.google.com/uc?export=download&id=1mmL3YGnJjblEFXGp7yfFKT1HcCU6l-Xo"},
   {eventCode:87,name:"W",des:"What am i doing?", song:"https://docs.google.com/uc?export=download&id=1IsyG3C9Q27mMdw3lsqpIfCzqhSpqLHdp"},
   {eventCode:69,name:"E",des:"Iku~", song:"https://docs.google.com/uc?export=download&id=1HPtK1UnCOj5dwdC5MS2VC_Tf956KFABe"},
   {eventCode:65,name:"A",des:"UH!", song:"https://docs.google.com/uc?export=download&id=16cOfRqFQmM8DlWDk80CGxb5zEJw_5nUA"},
   {eventCode:83,name:"S",des:"Best Hentai girl??", song:"https://docs.google.com/uc?export=download&id=1bOagMu3rsyLXHqDzcHQmH14EtxAD7Ydw"},
   {eventCode:68,name:"D",des:"Yamete kudasai~", song:"https://docs.google.com/uc?export=download&id=14TP2l6rXeUv0NISIZgC-mMuU5NWkq2Ee"},
   {eventCode:90,name:"Z",des:"Hentai!!", song:"https://docs.google.com/uc?export=download&id=1OZOm1-AVnp-whzZdGdFjs28znq2wKV0o"},
   {eventCode:88,name:"X",des:"Where are you touching?", song:"https://docs.google.com/uc?export=download&id=15gJlw35SfezuvtBJg2vHwC9Nzi2b1m8D"},
   {eventCode:67,name:"C",des:"I wish ur wearing headphones", song:"https://docs.google.com/uc?export=download&id=1kUwRawi6UxFyZpZfdiZkKy3eLV05TeP9"}
];
function Machine(){

    const [eventCode,setEventCode]=useState(0);
    const [name,setName]=useState("");
    const [des,setDes]=useState("");
    const [song,setSong]=useState("");

    function setState(music){
        setName(music.name);
        setDes(music.des);
        setSong(music.song);
        
    }

    function pressKeyHandler(event){
        var music;
        if((event.key)==="q"||(event.key)==="w"||(event.key)==="e"||
        (event.key)==="a"||(event.key)==="s"||(event.key)==="d"||
        (event.key)==="z"||(event.key)==="x"||(event.key)==="c"){
        music=buttons.find(song=>song.eventCode===event.keyCode);
        console.log(music);
         setState(music);
        }
    }
    function clickKeyHandler(pressedKey){
        let music=buttons.find(song=>song.eventCode===pressedKey);
        setState(music);
    }


    
    useEffect(()=>{
        window.addEventListener("keydown",pressKeyHandler);
        return ()  =>{
            window.removeEventListener("keydown",pressKeyHandler)
        }
    },[]);
    return (
        <div id="drum-machine">
            <h2>Dùng bàn phím hoặc tap để chơi nhạc</h2>
            <div id="display">
                <p>{des==""?<br />: des}</p>
                <audio loop autoPlay src={song}></audio>
            </div>
            <div>
                <ul className="keyboard">
                    {buttons.map(button=>{
                      return  <Button 
                        key={button.eventCode}
                        eventCode={button.eventCode}
                        name={button.name}
                        clickKeyHandler={clickKeyHandler}
                        />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Machine;