class Vector {
  private x: number;
  private y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  plus(v: Vector) {
    return new Vector(this.x + v.x, this.y + v.y);
  }
  scale(t: number) {
    return new Vector(this.x * t, this.y * t);
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  verticalFlip() {
    return new Vector(-this.x, this.y);
  }
  horizontalFlip() {
    return new Vector(this.x, -this.y);
  }
  toString() {
    return "[" + this.x + ", " + this.y + "]";
  }
}