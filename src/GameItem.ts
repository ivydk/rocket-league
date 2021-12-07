export default class GameItem {
  private name: string;

  protected xPosition: number;

  protected yPosition: number;

  protected speed: number;

  /**
   * constructs a new GameItem
   *
   * @param name string
   * @param xPosition number
   * @param yPosition number
   * @param speed how fast the item goes
   */
  constructor(name: string, xPosition: number, yPosition: number, speed: number) {
    this.name = name;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.speed = speed;
  }

  /**
  * Generates a random integer number between min and max
  *
  * NOTE: this is a 'static' method. This means that this method must be called like
  * `Game.randomInteger()` instead of `this.randomInteger()`.
  *
  * @param min - minimal time
  * @param max - maximal time
  * @returns a random integer number between min and max
  */
  public static randomInteger(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  /**
 * Loads an image in such a way that the screen doesn't constantly flicker
 *
 * NOTE: this is a 'static' method. This means that this method must be called like
 * `Game.loadNewImage()` instead of `this.loadNewImage()`.
 *
 * @param source The address or URL of the a media resource that is to be loaded
 * @returns an HTMLImageElement with the source as its src attribute
 */
  protected static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Gets the x pos from a GameItem object
   *
   * @returns x position
   */
  public getXPos = (): number => this.xPosition;

  /**
   * Gets the y pos from a GameItem object
   *
   * @returns y position
   */
  public getYPos = (): number => this.yPosition;
}
