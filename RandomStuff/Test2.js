// function test() {
//   console.log('maj ne raboti');
//   const data = window.pesho + taina2;
//   return data;
// }

// const { GraphicsGeometry } = require('@pixi/graphics');

// console.log(document);
// for (let i = 0; i < 5; i++) {
//   var btn = document.createElement("button");
//   btn.appendChild(document.createTextNode("Button " + i));
//   console.log(btn);
//   btn.addEventListener("click", () => console.log(i));
//   document.body.appendChild(btn);
// }

//   console.log(window.data4)
//   console.log(data3)
// counter()
// let data = 10
// const data2 = 10
// var data3=10
// function counter() {
//   var a = 7;
  
//     data4 = 100
 
//   console.log(a)
// }

// console.log("dada")

// setTimeout(()=>{
//   console.log("=================================>>>>>>>>>>>>>>>>>>>> vlizav seta")
// },0)

// for (let index = 0; index < 100000; index++) {
//   console.log(index)
  
// }

// let dec = counter.dec();
// dec();

// const { get, inc } = counter();
// inc();
// inc();
// inc();
function gg() {
  return new Promise((resolve) =>{
    let el = 0;
    for (let i = 0; i < 100000; i++) {
      el++;
    }
    console.log('vliza v setr');
    resolve(el);
  });
}

async function data() {
  await gg().then((c)=> console.log(c));
}

data();