import kaplay from "kaplay";

const k = kaplay({
    width:1920,
    height:1080,
    letterbox:true,
    global:false,
    background:[0,0,0],
    touchToMouse:true,
    buttons:{
        jump:{
            keyboard:["up","space"],
            mouse:"left"
        },
        start:{
            keyboard:["space","enter"]
        }
    },
    debugKey:"a",
    debug:true
})


export default k;