import './index.css';
import sketch from './sketches/sketch';
import * as p5 from 'p5';

document.addEventListener('DOMContentLoaded', () => {
  const P5 = new p5(sketch);
});
