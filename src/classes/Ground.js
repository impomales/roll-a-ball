import * as BABYLON from "babylonjs";
import GameObject from "./GameObject";

export default class Ground extends GameObject {
  constructor(size, game) {
    super("ground", game);
    const vertexData = BABYLON.VertexData.CreatePlane({ size });
    vertexData.applyToMesh(this);
  }
}
