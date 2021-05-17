const el = document.createElement('div');
el.innerHTML = 'HELLO WORLD';
document.body.appendChild(el);

const canvas = document.getElementById('canvas1');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext(`2d`);
canvas.width = 700;
canvas.height = 450;

let value = 0;
let scannedData = null;
let scannedImage = null;

const image = new Image();

image.src = '946466.jpg';

image.addEventListener('load', () => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
  scannedData = scannedImage.data;
  changeColor(scannedData, scannedImage);
});

function changeColor(scannedData, scannedImage) {
  for (let index = 0; index < scannedData.length; index += 4) {
    const total =
      scannedData[index] + scannedData[index + 1] + scannedData[index + 2];
    const overage = total / 3;
    // scannedData[index] = overage;
    // scannedData[index + 1] = overage + value + 20;
    // scannedData[index + 2] = overage + value + 5;
  }
  scannedImage.data = scannedData;
  ctx.putImageData(scannedImage, 0, 0);
}

const button = document.createElement('button');
button.innerText = 'BUTTON';
button.addEventListener('click', () => {
  console.log(value);
  value += 10;
  changeColor(scannedData, scannedImage);
});
document.body.appendChild(button);
