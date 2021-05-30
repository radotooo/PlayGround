import { Filter, Graphics, Sprite, uniformParsers } from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Mesh from '../components/Pixi3d';
import Myfilter from '../components/MyFilter';
import Explosion from '../components/Explosion';
// import Myfilter from '../components/MyFilter';

export default class Play extends Scene {
  async onCreated() {
    const footer = new Footer();
    footer.x = -window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);
    // this.index = 0;
    // this.createElement();
    // const mesh = new Mesh();
    // this.addChild(mesh);
    const explosion = new Explosion();

    this.addChild(explosion);
    document.addEventListener('click', ()=>{
      explosion.animate();
    });
  }

  createElement() {
    const square = new Graphics();
    square.beginFill(0xff0000);
    square.drawRect(0, 0, 100, 100);
    square.endFill();
    square.pivot.x = square.width / 2;
    square.pivot.y = square.height / 2;
    const filter = new Myfilter(0.3);
    square.filters = [filter];
    this.filter = filter;
    // filter.uniforms.u_time = 0.3;
    // this.animat>e();>>>>>>
    this.addChild(square);
  }

  delay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('sega');
      }, 500);
    });
  }

  async animate() {
    setTimeout(() => {
      console.log('inn');
      this.index++;
      this.filter.uniforms.u_time = this.index;
      this.animate();
    }, 500);
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    // eslint-disable-line no-unused-vars
  }
}
