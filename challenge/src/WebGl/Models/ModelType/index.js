import { flushSync } from 'react-dom'
import GLC from '../../GLCommander'

export default class ModelType{
  constructor(vertices, indices){
    this.vertices = vertices
    this.indices = indices
  }


  _genVertexBuffer = () => {
    this.vertexBuffer = GLC.createBuffer()
    GLC.bindArrayBuffer(this.vertexBuffer)
    GLC.addArrayBufferDate(this.vertices)
    GLC.unbindArrayBuffer()
  }
}