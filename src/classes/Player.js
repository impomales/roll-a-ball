import * as BABYLON from 'babylonjs';
import GameObject from './GameObject';

export default class Player extends GameObject {
  constructor(diameter, game) {
    super('player', game);
    const vertexData = BABYLON.VertexData.CreateSphere({ diameter });
    vertexData.applyToMesh(this);
  }
}
