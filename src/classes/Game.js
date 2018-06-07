import * as BABYLON from 'babylonjs';
import Ground from './Ground';
import Cube from './Cube';
import Player from './Player';

const NUM_OF_CUBES = 10;
const GROUND_SIZE = 20;

export default class Game {
  constructor(canvasId) {
    // get element from html file.
    const canvas = document.getElementById(canvasId);
    // initiate the engine.
    this.engine = new BABYLON.Engine(canvas, true);
    // create a scene.
    this.scene = new BABYLON.Scene(this.engine);
    this.scene.ambientColor = BABYLON.Color3.White();
    // set up a camera.
    this.camera = new BABYLON.ArcRotateCamera(
      'camera',
      Math.PI / 4,
      Math.PI / 3,
      35,
      BABYLON.Vector3.Zero(),
      this.scene
    );
    // this.camera = new BABYLON.FreeCamera(
    //   "camera",
    //   new BABYLON.Vector3(-15, 10, -15),
    //   this.scene
    // );
    // sets where the camera is looking at.
    this.camera.setTarget(BABYLON.Vector3.Zero());
    // allows user to control camera.
    this.camera.attachControl(this.engine.getRenderingCanvas(), true);
    // lighting.
    this.light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 1, 0),
      this.scene
    );

    // ground
    this.ground = new Ground(GROUND_SIZE, this);
    this.ground.rotation.x = Math.PI / 2;
    // cubes
    this.cubes = [];
    for (let i = 0; i < NUM_OF_CUBES; i++) {
      const cube = new Cube(0.35, this);
      cube.position.y = 0.5;
      cube.rotation.x = Math.PI / 4;
      cube.rotation.z = Math.PI / 4;
      // RANDOM NUMBER BETWEEN MIN MAX
      const max = GROUND_SIZE / 2 - 1.5;
      const min = -GROUND_SIZE / 2 + 1.5;
      cube.position.x = Math.random() * (max - min) + min;
      cube.position.z = Math.random() * (max - min) + min;
      this.cubes.push(cube);
    }
    // player
    this.player = new Player(1, this);
    this.player.position = new BABYLON.Vector3(0, 1, 0);
    // renders the scene 60 fps.
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }
}
