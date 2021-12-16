import GLC from '../../GLCommander'
import VertexSource from './vertex'
import FragmentSource from './fragment'
import Location from './location'
import vertex from './vertex'
 
export default class ModelShader{
  constructor(){
    const vertexShader = GLC.createVertexShader()
    GLC.addShaderSource(vertexShader, VertexSource)
    GLC.compileShader(vertexShader)

    const fragmentShader = GLC.createFragmentShader()
    GLC.addShaderSource(fragmentShader, FragmentSource)
    GLC.compileShader(fragmentShader)

    const program = GLC.createShaderProgram()
    GLC.attachShaderToProgram(program, vertexShader)
    GLC.attachShaderToProgram(program, fragmentShader)
    GLC.linkProgram(program)

    this.positionAttribute = GLC.getAttributeLocation(program, Location.POSITION)

    this.program = program
  }

  use = () => {
    GLC.useProgram(this.program)
  }

  enablePosition = () => {
    GLC.enableVertexAttribArray(this.positionAttribute)
    GLC.pointToAttribute(this.positionAttribute, 3)
  }
}