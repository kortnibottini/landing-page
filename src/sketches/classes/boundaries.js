import * as matter from 'matter-js';
import engine from './engine';

export default class Boundaries {
  constructor(p) {
    this.p = p;
    this.resizeBounds();
  }

  resizeBounds() {
    if (this.ground) {
      matter.World.remove(engine.world, [
        this.ground,
        this.leftWall,
        this.rightWall,
      ]);
    }
    const options = {
      isStatic: true,
    };
    this.ground = matter.Bodies.rectangle(
      0,
      this.p.height,
      this.p.width * 2,
      32,
      options,
    );
    this.leftWall = matter.Bodies.rectangle(
      0,
      0,
      10,
      this.p.height * 3,
      options,
    );
    this.rightWall = matter.Bodies.rectangle(
      this.p.width,
      0,
      10,
      this.p.height * 3,
      options,
    );
    matter.World.add(engine.world, [
      this.ground,
      this.leftWall,
      this.rightWall,
    ]);
  }
}
