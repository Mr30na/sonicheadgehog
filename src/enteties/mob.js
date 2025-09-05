import k from "../ctx";

export function createMob(pos){
   return k.add([
        k.pos(pos),
        k.area({shape:new k.Rect(k.vec2(-5,0),32,32)}),
        k.sprite("motobug",{anim:"run"}),
        k.scale(4),
        k.anchor("center"),
        k.offscreen(),
        "enemy"
    ])
}