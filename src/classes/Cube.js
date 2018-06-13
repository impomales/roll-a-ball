import * as BABYLON from 'babylonjs';
import GameObject from './GameObject';

export default class Cube extends GameObject {
  constructor(size, game) {
    super('cube', game);
    const vertexData = BABYLON.VertexData.CreateBox({ size });
    vertexData.applyToMesh(this);

    const material = new BABYLON.StandardMaterial('cubeMaterial', game.scene);
    material.emissiveColor = new BABYLON.Color3(0.7, 0, 0.5);
    material.specularColor = new BABYLON.Color3(0, 1, 0);

    this.material = material;
    game.shadows.getShadowMap().renderList.push(this);
  }
}
