export function parallaxScroll(obj,offset,y,speed){
        if (obj[1].pos.x < 0) {
      obj[0].moveTo(obj[0].pos.x+offset[0],y);
      obj.push(obj.shift());
    }

    obj[0].move(-speed, 0);
    obj[1].moveTo(obj[0].pos.x+offset[1],y);
}