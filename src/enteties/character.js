import k from "../ctx";

export function createCharacter(pos){
   return k.add([
        k.sprite("character",{anims:"run"}),
        k.scale(4),
        k.area(),
        k.anchor("center"),
        k.pos(pos)
    ])
}