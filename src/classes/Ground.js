import * as BABYLON from 'babylonjs';
import GameObject from './GameObject';

export default class Ground extends GameObject {
  constructor(size, game) {
    super('ground', game);
    const vertexData = BABYLON.VertexData.CreateBox({
      width: size,
      height: size,
      depth: 0.05
    });
    vertexData.applyToMesh(this);

    this.physicsImpostor = this.makeStaticImposter(this, game.scene);
    // create walls
    const northWall = new BABYLON.MeshBuilder.CreateBox(
      'wall',
      {
        width: size,
        height: 1,
        depth: 1.5
      },
      game.scene
    );
    northWall.position.y = -size / 2;
    northWall.physicsImpostor = this.makeStaticImposter(northWall, game.scene);

    const southWall = new BABYLON.MeshBuilder.CreateBox(
      'wall',
      {
        width: size,
        height: 1,
        depth: 1.5
      },
      game.scene
    );
    southWall.position.y = size / 2;
    southWall.physicsImpostor = this.makeStaticImposter(southWall, game.scene);

    const eastWall = new BABYLON.MeshBuilder.CreateBox(
      'wall',
      {
        width: size - 1,
        height: 1,
        depth: 1.5
      },
      game.scene
    );
    eastWall.rotation.z = Math.PI / 2;
    eastWall.position.x = 0.5 - size / 2;
    eastWall.physicsImpostor = this.makeStaticImposter(eastWall, game.scene);


    const westWall = new BABYLON.MeshBuilder.CreateBox(
      'wall',
      {
        width: size - 1,
        height: 1,
        depth: 1.5
      },
      game.scene
    );
    westWall.rotation.z = Math.PI / 2;
    westWall.position.x = size / 2 - 0.5;
    westWall.physicsImpostor = this.makeStaticImposter(westWall, game.scene);

    // attaches wall meshes to the root game object.
    northWall.parent = this;
    southWall.parent = this;
    westWall.parent = this;
    eastWall.parent = this;

    // materials
    const material = new BABYLON.StandardMaterial('groundMaterial', game.scene);
    material.diffuseColor = new BABYLON.Color3(0.25, 0.5, 1);
    material.specularColor = BABYLON.Color3.White();
    material.ambientColor = new BABYLON.Color3(0.1, 0, 0);

    this.material = material;
    northWall.material = material;
    southWall.material = material;
    eastWall.material = material;
    westWall.material = material;

    this.receiveShadows = true;

  }

  makeStaticImposter(object, scene) {
    return new BABYLON.PhysicsImpostor(
      object,
      BABYLON.PhysicsImpostor.BoxImpostor,
      {
        mass: 0,
        restitution: 0.9
      },
      scene
    );
  }
}
