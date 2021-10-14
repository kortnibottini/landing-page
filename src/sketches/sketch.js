import * as matter from "matter-js";

import Text from "./classes/text";
import Boundaries from "./classes/boundaries";
import Icon, { NUM_OF_ICONS } from "./classes/icon";
import engine from "./classes/engine";
import { getViewportSize } from "./utils/math";
import { scaleCanvas } from "./utils/canvas";

const ICONS_REF = [...Array(NUM_OF_ICONS)].map((i, k) => k + 1);

function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

const getNewSetOfIcons = array => {
  return shuffle([...array]);
};

const sayings = [
  "Hello.",
  "I am a product designer",
  "and AI enthusiast.",
  "Solving problems",
  "big and small",
  "@snap"
];

export default class sketch {
  font;
  movers = [];
  options = [];
  boundaries;
  canvas;
  ctx;

  constructor() {
    const { width, height } = getViewportSize();
    this.canvas = document.createElement("canvas");
    this.canvas.setAttribute("data-pixel-ratio", "2");
    this.ctx = this.canvas.getContext("2d");
    scaleCanvas(this.canvas, this.ctx, width, height);

    document.body.appendChild(this.canvas);
    sayings.forEach(n => {
      const txt = new Text(this.ctx, n);
      this.movers.push(txt);
    });
    this.boundaries = new Boundaries();

    matter.Engine.run(engine);

    window.addEventListener("resize", this.handleResize);
    document.body.addEventListener("click", this.handleClick);

    requestAnimationFrame(this.draw);
  }

  handleResize = () => {
    const { width, height } = getViewportSize();
    scaleCanvas(this.canvas, this.ctx, width, height);
    this.boundaries.resizeBounds();
  };

  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    matter.Engine.update(engine);
    requestAnimationFrame(this.draw);

    for (var i = 0; i < this.movers.length; i++) {
      this.movers[i].display();
    }
  };

  handleClick = e => {
    e.preventDefault();
    if (this.options.length <= 0) {
      this.options = getNewSetOfIcons(ICONS_REF);
    }
    const icon = this.options.pop();

    this.movers.push(new Icon(this.ctx, e.clientX, e.clientY, icon));
  };
}
