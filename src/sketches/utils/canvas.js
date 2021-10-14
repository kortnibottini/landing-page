export function getDeviceRatio(context) {
  const devicePixelRatio = window.devicePixelRatio || 1;

  // determine the 'backing store ratio' of the canvas context
  const backingStoreRatio =
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  // determine the actual ratio we want to draw at
  const ratio = devicePixelRatio / backingStoreRatio;
  return { ratio, backingStoreRatio };
}

export function scaleCanvas(canvas, context, width, height) {
  const { ratio, backingStoreRatio } = getDeviceRatio(context);

  if (devicePixelRatio !== backingStoreRatio) {
    // set the 'real' canvas size to the higher width/height
    canvas.width = width * ratio;
    canvas.height = height * ratio;

    // ...then scale it back down with CSS
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
  } else {
    // this is a normal 1:1 device; just scale it simply
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = "";
    canvas.style.height = "";
  }

  // scale the drawing context so everything will work at the higher ratio
  context.scale(ratio, ratio);
}

export function preloadImage(src) {
  return new Promise((res, rej) => {
    const image = new Image();
    image.style.position = "fixed";
    image.style.left = "-9999px";
    image.style.visibility = "hidden";
    document.body.appendChild(image);
    image.onload = ev => {
      res(image);
    };
    image.src = src;
  });
}
