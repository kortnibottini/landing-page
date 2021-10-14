import * as matter from "matter-js";
import engine from "./engine";
import { getRandomIntInclusive, getViewportSize } from ".././utils/math";

const COLOR = "#000";

export default class Text {
  x = 0;
  y = 0;
  height = 0;
  txt = "do yer best";
  el;
  ctx;

  constructor(ctx, txt) {
    const viewport = getViewportSize();
    this.x = getRandomIntInclusive(0, viewport.width - 100);
    this.txt = txt || this.txt;
    this.ctx = ctx;

    this.height = (viewport.width / viewport.height) * 60;
    this.ctx.font = `${this.height}px itc-avant-garde-gothic-pro`;
    const size = ctx.measureText(txt);
    this.width = size.width;
    this.ctx.fillText(txt, this.x, this.y);

    this.body = matter.Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height,
      {
        restitution: 0.9
      }
    );
    matter.World.add(engine.world, this.body);
  }

  display(font) {
    this.ctx.save();
    this.ctx.font = `${this.height}px itc-avant-garde-gothic-pro`;
    const textSize = this.ctx.measureText(this.txt);
    if (this.width !== textSize.width) {
      matter.Body.scale(this.body, textSize.width / this.width, 1);
      this.width = textSize.width;
    }

    this.ctx.textBaseline = "middle";
    this.ctx.textAlign = "center";
    this.ctx.translate(this.body.position.x, this.body.position.y);
    this.ctx.rotate(this.body.angle);
    this.ctx.fillText(this.txt, 0, 0);
    this.ctx.restore();
  }
}
