import Location from './location'

export default `
  attribute vec3 ${Location.POSITION};

  void main(void){
    gl_Position = vec4(${Location.POSITION}, 1.0)
  }
`