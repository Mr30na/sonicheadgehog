import k from "../ctx"
    let GAME_SPEED = 100; 

export default function game(){ 
    const player = k.add([
        k.pos(30,40),
        k.body(),
        k.color([255, 204, 255]),
        k.move(k.RIGHT,100),
        k.area(),
        k.rect(100,100,{}),
        "player"
    ])
    const ground =  k.add([
        k.rect(k.width(), 48),
        k.pos(0, k.height()),
        k.anchor("botleft"),
        k.area(),
        k.body({ isStatic: true }),
        k.color(132, 101, 236),
    ])
    
    k.onButtonPress("jump",()=>{
        if(player.isGrounded()){
            player.jump(1000)
        }
        
    })

}