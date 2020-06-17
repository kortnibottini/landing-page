import * as matter from 'matter-js';
import engine from './engine';

export const NUM_OF_ICONS = 12;

function getWidth(length, ratio) {
  var width = length / Math.sqrt(1 / (Math.pow(ratio, 2) + 1));
  return Math.round(width);
}

export default class Icon {
  body = {
    position: {
      x: 0,
      y: 0,
    },
  };

  constructor(p, x, y, icon) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.src = require(`./icons/${icon}.png`);
    this.img = p.loadImage(this.src);
    this.ratio = this.img.width / this.img.height;
    this.width = this.img.width;
    this.height = this.img.height;
    this.body = matter.Bodies.rectangle(
      this.x,
      this.y,
      this.img.width,
      this.img.height,
    );
    matter.World.add(engine.world, this.body);
  }

  display() {
    if (this.img.height !== this.height) {
      const rat = this.p.width / this.p.height;
      const width = getWidth(this.img.width / 2, rat);
      this.img.resize(width, 0);
      matter.Body.scale(this.body, this.img.width, this.img.height);
      this.width = this.img.width;
      this.height = this.img.height;
    }
    this.p.push();
    this.p.rectMode(this.p.CENTER);
    this.p.imageMode(this.p.CENTER);
    this.p.translate(this.body.position.x, this.body.position.y);
    this.p.rotate(this.body.angle);
    this.p.image(this.img, 0, 0);
    this.p.pop();
  }
}
