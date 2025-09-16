import k from "../ctx";
export default function gameOver(){
    let bestScore = k.getData("best_score");
    let currentScore = k.getData("current_score");
    k.add([
        k.anchor("center"),
        k.pos(k.center().x-300,k.center().y + 90),
        k.text(`best score:${bestScore}`,{size:50})
    ])
        k.add([
        k.anchor("center"),
        k.pos(k.center().x+250,k.center().y + 90),
        k.text(`current score:${currentScore}`,{size:50})
    ])
    k.add([
        k.anchor("center"),
        k.pos(k.center().x,k.center().y),
        k.text("Game Over",{font:"mania",size:100})
    ])
    k.wait(2,()=>{
        k.add([
            k.anchor("center"),
            k.pos(k.center().x,k.center().y+200),
            k.text("press space or tap the screen to play again",{size:50})
        ])  
        k.onButtonDown("start",()=>{
            k.go("game")
        })
    })

}