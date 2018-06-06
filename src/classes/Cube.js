import * as BABYLON from 'babylonjs';
import GameObject from './GameObject';

export default class Cube extends GameObject {
  constructor(size, game) {
    super('cube', game);
    const vertexData = BABYLON.VertexData.CreateBox({ size });
    vertexData.applyToMesh(this);
  }
}
