import Pen from "./Pen";

export default class Eraser extends Pen {
  draw(x, y) {
    this.ctx.strokeStyle = "white";
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
