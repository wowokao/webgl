import React from 'react'
import init from './init'

export default class WebGl extends React.Component{

    componentDidMount(){
      init('webgl')
    }

    render(){
      return <canvas id='webgl' width='400' height='400' style={{border:'1px solid black'}}></canvas>
    }
}