import * as matter from "matter-js";
import engine from "./engine";
import { getViewportSize } from "../utils/math";

export default class Boundaries {
  constructor() {
    this.resizeBounds();
  }

  resizeBounds() {
    const { width, height } = getViewportSize();
    if (this.ground) {
      matter.World.remove(engine.world, [
        this.ground,
        this.leftWall,
        this.rightWall
      ]);
    }
    const options = {
      isStatic: true
    };
    this.ground = matter.Bodies.rectangle(0, height, width * 2, 32, options);
    this.leftWall = matter.Bodies.rectangle(0, 0, 10, height * 3, options);
    this.rightWall = matter.Bodies.rectangle(width, 0, 10, height * 3, options);
    matter.World.add(engine.world, [
      this.ground,
      this.leftWall,
      this.rightWall
    ]);
  }
}
