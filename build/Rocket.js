import GameItem from './GameItem.js';
export default class Rocket extends GameItem {
    radius;
    constructor(name, xPosition, yPosition, speed) {
        super(name, xPosition, yPosition, speed);
    }
    draw(ctx) { }
    ;
    move() { }
    ;
    outOfCanvas(width, height) {
        return true;
    }
}
//# sourceMappingURL=Rocket.js.map