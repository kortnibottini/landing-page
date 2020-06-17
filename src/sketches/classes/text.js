import * as matter from 'matter-js';
import engine from './engine';

const COLOR = '#fff';

export default class Text {
  x = 0;
  y = 0;
  height = 0;
  txt = 'do yer best';

  constructor(p, x, y, txt) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.txt = txt || this.txt;

    this.height = this.p.width / this.p.height * 50;
    this.width = this.p.textWidth(this.txt);
    this.p.textSize(this.height);
    this.body = matter.Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height,
      {
        restitution: 0.9,
      },
    );
    matter.World.add(engine.world, this.body);
  }

  display(font) {
    const textWidth = this.p.textWidth(this.txt);
    if (this.width !== textWidth) {
      matter.Body.scale(this.body, textWidth / this.width, 1);
      this.width = textWidth;
    }
    this.p.push();
    this.p.noStroke();
    this.p.textAlign(this.p.CENTER, this.p.CENTER);
    this.p.rectMode(this.p.CENTER);
    this.p.translate(this.body.position.x, this.body.position.y);
    this.p.rotate(this.body.angle);
    this.p.fill(COLOR);
    this.p.text(this.txt, 0, 0);
    this.p.pop();
  }
}
