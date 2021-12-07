import KeyboardListener from './KeyboardListener.js';
import Player from './Player.js';
class Game {
    rockets;
    player;
    canvas;
    score;
    ctx;
    keyBoardListener;
    name;
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.rockets = [];
        this.keyBoardListener = new KeyboardListener();
        for (let index = 0; index < 10; index++) {
            if (index % 2 === 0) {
                this.rockets.push(this.rocketFactory('Rocket', 'leftToRight'));
                console.log('leftToRight');
            }
            else {
                this.rockets.push(this.rocketFactory('Rocket', 'topToBottom'));
            }
        }
        console.log(this.rockets);
        this.name = 'Ivy';
        this.player = new Player(this.name, this.canvas.width / 2, this.canvas.height / 2, 4, 15);
        console.log(this.player);
        this.score = 0;
        this.loop();
    }
    loop = () => {
        this.score += 1;
        this.draw();
        this.player.draw(this.ctx);
        this.player.move();
        this.rocketOutOfCanvas();
        console.log(this.score);
        requestAnimationFrame(this.loop);
    };
    rocketFactory(name, type) {
        let xPosition = Game.randomInteger(0, this.canvas.width - 200);
        let yPosition = Game.randomInteger(0, this.canvas.height - 200);
        let image;
        if (type === 'leftToRight') {
            xPosition = 0;
            image = Game.loadNewImage('./assets/rocket-horizontal.png');
        }
        else {
            yPosition = 0;
            image = Game.loadNewImage('./assets/rocket-vertical.png');
        }
        return {
            name: name,
            xPos: xPosition,
            yPos: yPosition,
            type: type,
            speed: Game.randomInteger(0, 15),
            image: image,
        };
    }
    createPlayer(name) {
        return {
            name: name,
            xPos: this.canvas.width / 2,
            yPos: this.canvas.height / 2,
            radius: 15,
            speed: 4,
        };
    }
    move() {
        this.rockets.forEach((rocket) => {
            if (rocket.type === 'leftToRight') {
                rocket.xPos += rocket.speed;
            }
            else {
                rocket.yPos += rocket.speed;
            }
        });
    }
    rocketOutOfCanvas() {
        this.rockets.forEach((rocket) => {
            if (rocket.type === 'leftToRight') {
                if (rocket.xPos + rocket.image.width >= this.canvas.width) {
                    rocket.xPos = 0;
                    rocket.yPos = Game.randomInteger(0, this.canvas.height);
                }
            }
            else if (rocket.yPos + rocket.image.height >= this.canvas.height) {
                rocket.yPos = 0;
                rocket.xPos = Game.randomInteger(0, this.canvas.height);
            }
        });
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.rockets.length !== 0) {
            this.rockets.forEach((rocket) => {
                this.ctx.drawImage(rocket.image, rocket.xPos, rocket.yPos);
            });
            this.writeTextToCanvas(`Score is: ${this.score}`, 40, this.canvas.width / 2, 40);
        }
    }
    writeTextToCanvas(text, xCoordinate, yCoordinate, fontSize = 20, color = 'red', alignment = 'center') {
        const ctx = this.canvas.getContext('2d');
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
window.addEventListener('load', () => new Game(document.getElementById('canvas')));
//# sourceMappingURL=app.js.map