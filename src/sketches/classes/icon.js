import * as matter from "matter-js";
import engine from "./engine";
import { getViewportSize, getRandomInRange } from "../utils/math";
import { getDeviceRatio } from "../utils/canvas";

export const NUM_OF_ICONS = 10;

function getWidth(length, ratio) {
  var width = length / Math.sqrt(1 / (Math.pow(ratio, 2) + 1));
  return Math.round(width);
}

export default class Icon {
  constructor(ctx, x, y, icon) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    const viewport = getViewportSize();

    this.img = window._sketch_image_sources[icon - 1];
    const ratio = viewport.width / viewport.height;
    const dimensionalGrowthHeight = this.img.height >= this.img.width;
    const imgRatio = dimensionalGrowthHeight
      ? this.img.width / this.img.height
      : this.img.height / this.img.width;
    const randomBasis = ratio * getRandomInRange(0.1, 1);
    console.log(randomBasis);
    this.height = this.img.height * imgRatio * ratio * randomBasis;
    this.width = this.img.width * imgRatio * ratio * randomBasis;

    this.body = matter.Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height
    );
    matter.World.add(engine.world, this.body);
  }

  display() {
    const { ratio } = getDeviceRatio(this.ctx);
    this.ctx.setTransform(
      ratio,
      0,
      0,
      ratio,
      this.body.position.x * ratio,
      this.body.position.y * ratio
    ); // sets scale and origin
    this.ctx.rotate(this.body.angle);
    this.ctx.drawImage(
      this.img,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
}
