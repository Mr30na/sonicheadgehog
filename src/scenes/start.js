import k from "../ctx";
import { createCharacter } from "../enteties/character";
export default function startGame(){
    if(!k.getData("best_score")){k.setData("best_score",0)}
    //k.onButtonPress("jump",()=>k.go("game"));

    const bgwidth = 1920;
    const bgPieces =[
        k.add([k.sprite("chemic-bg"),k.pos(0,0),k.scale(2),k.opacity(0.8)]),
        k.add([k.sprite("chemic-bg"),k.pos(bgwidth*2,0),k.scale(2),k.opacity(0.8)])
    ]

    const platfromWidth = 1280;
    const platforms = [
        k.add([k.sprite("platform"),k.pos(0,450),k.scale(4)]),
        k.add([k.sprite("platform"),k.pos(platfromWidth*4,450),k.scale(4)])
    ]
         k.add([
            k.pos(0,832),
            k.opacity(0),
            k.body({isStatic:true}),
            k.rect(1920,300),
            "platform",
            k.area()
        ])
    k.add([
        k.pos(k.center().x,200),
        k.text("Welcome to sonic",{
            font:"mania",
            size:100
        }),
        k.anchor("center")
        
    ])

    k.add([
        k.pos(k.center().x,k.center().y - 170),
        k.text("Press space or enter to start",{
            font:"mania",
            size:40
        }),
        k.anchor("center")
    ])
    let char = createCharacter(k.vec2(200,745));
    char.play("run")
    k.onUpdate(()=>{
        if(bgPieces[1].pos.x<0){
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgwidth*2,0);
            bgPieces.push(bgPieces.shift())
        }

        bgPieces[0].move(-100,0)
        bgPieces[1].moveTo(bgPieces[0].pos.x+bgwidth*2,0)

                if(platforms[1].pos.x<0){
            platforms[0].moveTo(platforms[1].pos.x + platforms[1].width,450);
            platforms.push(platforms.shift())
        }

        platforms[0].move(-1000,0)
        platforms[1].moveTo(platforms[0].pos.x+ platforms[1].width*4,450)

        char.getAnim("run")
    })

    k.onButtonPress("jump",()=>{
        char.play("jump")
    })
    k.onButtonRelease("jump",()=>{
        char.play("run")
    })

    k.onButtonDown("start",()=>{
        k.go("game")
    })

}