import * as BABYLON from "babylonjs";
import GameObject from "./GameObject";

export default class Ground extends GameObject {
  constructor(size, game) {
    super("ground", game);
    const vertexData = BABYLON.VertexData.CreatePlane({ size });
    vertexData.applyToMesh(this);
    // create walls
    const northWall = new BABYLON.MeshBuilder.CreateBox(
      "wall",
      {
        width: size,
        heigth: 1,
        depth: 1
      },
      game.scene
    );
    northWall.position.y = size / 2;

    const southWall = new BABYLON.MeshBuilder.CreateBox(
      "wall",
      {
        width: size,
        height: 1,
        depth: 1
      },
      game.scene
    );
    southWall.position.y = -size / 2;

    const westWall = new BABYLON.MeshBuilder.CreateBox(
      "wall",
      {
        width: size - 1,
        height: 1,
        depth: 1
      },
      game.scene
    );
    westWall.rotation.z = Math.PI / 2;
    westWall.position.x = 0.5 - size / 2;

    const eastWall = new BABYLON.MeshBuilder.CreateBox(
      "wall",
      {
        width: size - 1,
        height: 1,
        depth: 1
      },
      game.scene
    );
    eastWall.rotation.z = Math.PI / 2;
    eastWall.position.x = size / 2 - 0.5;

    // attaches wall meshes to the root game object.
    northWall.parent = this;
    southWall.parent = this;
    westWall.parent = this;
    eastWall.parent = this;
  }
}
