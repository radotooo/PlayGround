import { Container } from '@pixi/display';
import {
  Model,
  Light,
  LightingEnvironment,
  Mesh3D,
  Color,
  Material,
  MeshShader,
  Camera,
} from 'pixi3d';

export default class Mesht extends Container {
  constructor() {
    super();
    this.rotation = 0;
    this.rotation1 = 0;
    this.mesh = null;
    this._init();
  }

  _init() {
    let mesh = Mesh3D.createCube();

    this.mesh = mesh;
    mesh.z = 0;
    LightingEnvironment.main.lights.push(
      Object.assign(new Light(), { x: -1, z: 3 })
    );
    this.animate();
    this.addChild(mesh);
  }

  animate() {
    this.mesh.rotationQuaternion.setEulerAngles(
      this.rotation1++,
      this.rotation++,
      0
    );
    requestAnimationFrame(() => {
      this.animate();
      console.log(this.rotation);
    });
  }
}
