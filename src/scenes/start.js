import k from "../ctx";
export default function startGame(){
    if(!k.getData("best_score")){k.setData("best_score",0)}
    k.onButtonPress("jump",()=>k.go("game"));

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
}