import k from "../ctx";
export default function addPlatform(pos) {
  return k.add(
    [k.sprite("platform"), k.pos(pos.x,pos.y), k.scale(4)],
    k.body({ isStatic: true }),
    k.area()
  );
}
