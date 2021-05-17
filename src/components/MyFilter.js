import { Filter, defaultVertex } from '@pixi/core';
import { frag } from '../components/demo';
import { data } from '../components/gradient.js';

export default class MyFilter extends Filter {
  /**
   * @param {number} [alpha=1] - Amount of alpha from 0 to 1, where 0 is transparent
   */
  constructor(alpha = 1.0, r = 100, g = 100, b = 100) {
    super(defaultVertex, data);

    // this.alpha = alpha;
  }

  /**
   * Coefficient for alpha multiplication
   *
   * @member {number}
   * @default 1
   */
  get alpha() {
    return this.uniforms.uAlpha;
  }

  set alpha(value) {
    this.uniforms.uAlpha = value;
  }
  get time() {
    return this.uniforms.u_time;
  }
  set time(value) {
    this.uniforms.u_time = value;
  }
  set r(value) {
    this.uniforms.uG = value;
  }
  set b(value) {
    this.uniforms.uB = value;
  }
}
