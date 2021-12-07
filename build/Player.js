import GameItem from './GameItem.js';
import KeyboardListener from './KeyboardListener.js';
export default class Player extends GameItem {
    radius;
    keyBoard;
    constructor(name, xPosition, yPosition, speed, radius) {
        super(name, xPosition, yPosition, speed);
        this.radius = radius;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.xPosition, this.yPosition, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }
    ;
    move() {
        if (this.keyBoard.isKeyDown(KeyboardListener.KEY_LEFT)) {
            this.xPosition -= this.speed;
        }
        if (this.keyBoard.isKeyDown(KeyboardListener.KEY_RIGHT)) {
            this.xPosition += this.speed;
        }
        if (this.keyBoard.isKeyDown(KeyboardListener.KEY_UP)) {
            this.yPosition -= this.speed;
        }
        if (this.keyBoard.isKeyDown(KeyboardListener.KEY_DOWN)) {
            this.yPosition += this.speed;
        }
    }
    ;
    collidesWithRocket(rockets) {
        return true;
    }
}
//# sourceMappingURL=Player.js.map