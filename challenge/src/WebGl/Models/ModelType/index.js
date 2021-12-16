import { flushSync } from "react-dom";
import GLC from "../../GLCommander";

export default class ModelType {
  constructor(vertices, indices) {
    this.vertices = vertices;
    this.indices = indices;
    this._genIndexBuffer();
    this._genVertexBuffer();
  }

  _genVertexBuffer = () => {
    this.vertexBuffer = GLC.createBuffer();
    GLC.bindArrayBuffer(this.vertexBuffer);
    GLC.addArrayBufferDate(this.vertices);
    GLC.unbindArrayBuffer();
  };

  _genIndexBuffer = () => {
    this.indexBuffer = GLC.createBuffer();
    GLC.bindElementArrayBuffer(this.indexBuffer);
    GLC.addElementArrayBufferData(this.indices);
    GLC.unbindElementArrayBuffer();
  };
}
