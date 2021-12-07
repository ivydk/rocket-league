import GameItem from './GameItem.js';
import KeyboardListener from './KeyboardListener.js';
import Rocket from './Rocket.js';

/*
name: name,
xPos: this.canvas.width / 2,
yPos: this.canvas.height / 2,
radius: 15,
speed: 4,
*/

export default class Player extends GameItem {
  private radius: number;

  private keyBoard: KeyboardListener;

  /**
   * Constructs a new Player
   *
   * @param name string
   * @param xPosition number
   * @param yPosition number
   * @param speed speed of the player
   * @param radius the radius of the player
   */
  constructor(name: string, xPosition: number, yPosition: number, speed: number, radius: number) {
    super(name, xPosition, yPosition, speed);

    this.radius = radius;
  }

  /**
   * draws the player
   *
   * @param ctx canvas to draw on
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(
      this.xPosition,
      this.yPosition,
      this.radius,
      0,
      Math.PI * 2,
      false,
    );
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }

  /**
   * move the plater when you press the left, right, up and down key
   */
  public move(): void {
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

  // TODO: rocket moet Rocket[] worden
  /**
   * checks if the player collides with a rocket
   *
   * @param rockets d
   * @returns f
   */
  public collidesWithRocket(rockets: Rocket[]): boolean {
    return true;
  }
}
