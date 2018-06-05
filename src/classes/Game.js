import * as BABYLON from "babylonjs";
import Ground from "./Ground";

export default class Game {
  constructor(canvasId) {
    // get element from html file.
    const canvas = document.getElementById(canvasId);
    // initiate the engine.
    this.engine = new BABYLON.Engine(canvas, true);
    // create a scene.
    this.scene = new BABYLON.Scene(this.engine);
    // set up a camera.
    this.camera = new BABYLON.ArcRotateCamera(
      "camera",
      Math.PI / 4,
      1,
      20,
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
      "light",
      new BABYLON.Vector3(0, 1, 0),
      this.scene
    );
    // box
    this.cube = new BABYLON.Mesh.CreateBox("box", 1, this.scene);
    this.cube.position.y = 1;
    this.ground = new Ground(20, this.scene);
    this.ground.rotation.x = Math.PI / 2;
    // renders the scene 60 fps.
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }
}
