import * as ff from './ITCAvantGardePro-Md.otf';
import Text from './classes/text';
import Boundaries from './classes/boundaries';
import Icon, {NUM_OF_ICONS} from './classes/icon';
import engine from './classes/engine';
import * as matter from 'matter-js';

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
  'Hello.',
  'I am a product designer',
  'and AI enthusiast.',
  'Solving problems big and small',
  '@dropbox',
];
export default function sketch(p) {
  let font;
  let movers = [];
  let options = [];
  let boundaries;

  const handleResize = () => {
    const viewport = window.document.body.getBoundingClientRect();
    p.resizeCanvas(viewport.width, viewport.height);
    boundaries.resizeBounds();
  };

  p.preload = () => {
    font = p.loadFont(ff);
  };

  p.setup = () => {
    window.addEventListener('resize', handleResize);
    const viewport = window.document.body.getBoundingClientRect();
    p.createCanvas(viewport.width, viewport.height);
    p.textFont(font);
    sayings.forEach(n => {
      const txt = new Text(p, p.random(0, p.width - 100), 0, n);
      movers.push(txt);
    });
    boundaries = new Boundaries(p);
    matter.Engine.run(engine);
  };

  p.draw = () => {
    p.background('#3624FF');
    matter.Engine.update(engine);
    for (var i = 0; i < movers.length; i++) {
      movers[i].display(font);
    }
  };

  p.mousePressed = () => {
    if (options.length <= 0) {
      options = getNewSetOfIcons(ICONS_REF);
    }
    const icon = options.pop();
    movers.push(new Icon(p, p.mouseX, p.mouseY, icon));
  };
}
