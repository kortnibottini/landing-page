import * as matter from "matter-js";
import engine from "./engine";

export default class Boundaries {
  constructor(p) {
    const options = {
      isStatic: true
    };
    this.p = p;
    this.ground = matter.Bodies.rectangle(
      0,
      p.height,
      p.width * 2,
      32,
      options
    );
    this.leftWall = matter.Bodies.rectangle(0, 0, 10, p.height * 3, options);
    this.rightWall = matter.Bodies.rectangle(
      p.width,
      0,
      10,
      p.height * 3,
      options
    );
    matter.World.add(engine.world, [
      this.ground,
      this.leftWall,
      this.rightWall
    ]);
  }

  resizeBounds() {}
}
