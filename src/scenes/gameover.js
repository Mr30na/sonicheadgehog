import k from "../ctx";
export default function gameOver(){
    k.add([
        k.anchor("center"),
        k.pos(k.center().x,k.center().y),
        k.text("Game Over",{font:"mania",size:100})
    ])
    k.wait(2,()=>{
        k.add([
            k.anchor("center"),
            k.pos(k.center().x,k.center().y+90),
            k.text("press space or tap the screen to play again")
        ])  
        k.onButtonDown("start",()=>{
            k.go("game")
        })
    })

}