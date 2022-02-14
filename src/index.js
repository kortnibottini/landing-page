import "./index.css";
import sketch from "./sketches/sketch";
import { NUM_OF_ICONS } from "./sketches/classes/icon";
import { preloadImage } from "./sketches/utils/canvas";

const renderCanvas = () => {
  const iconSet = new Array(NUM_OF_ICONS).fill().map((_, key) => {
    const src = require(`./sketches/classes/icons/${key}.svg`);

    return preloadImage(src);
  });

  Promise.all(iconSet).then((data) => {
    window._sketch_image_sources = data;
    const P5 = new sketch();
  });
};

window.onload = () => {
  if (document && document.fonts) {
    // Do not block page loading
    setTimeout(() => {
      document.fonts.load("16px itc-avant-garde-gothic-pro").then(() => {
        renderCanvas();
      });
    }, 0);
  } else {
    renderCanvas();
  }
};
