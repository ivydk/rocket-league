import GameItem from './GameItem.js';

export default class Rocket extends GameItem {
  private radius: number;

  private type: string;

  /**
   * constructs a new Rocket
   *
   * @param name string of a name
   * @param xPosition position of x
   * @param yPosition position of y
   * @param speed how fast the Rocket (GameItem) goes
   * @param type what kind of Rocket `` or ``
   */
  public constructor(
    name: string,
    xPosition: number,
    yPosition: number,
    speed: number,
    type: string,
  ) {
    super(name, xPosition, yPosition, speed);
    this.type = type;
  }

  /**
   * draws the rocket
   *
   * @param ctx to draw on
   */
  public draw(ctx: CanvasRenderingContext2D): void { }

  /**
   * moves the rocket
   */
  public move(): void {
  };

  /**
   * determines if the rocket is out of the canvas
   *
   * @param width number
   * @param height number
   * @returns `true` if the rocket is out of the canvas
   */
  public outOfCanvas(width: number, height: number): boolean {
    return true;
  }
}
