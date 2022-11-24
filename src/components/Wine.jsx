import React, { Component } from 'react'
import './Wine.css'
export default class Wine extends Component {
  render() {
    let message = "";
    if(this.props.like){
      message = "♥"
    }
    return (
      <div className='wine'>
        <h1 className='wineh'>{this.props.title}</h1>
        <p className='winep'>{this.props.description}</p>
        <p className='winep2'>{this.props.rating}</p>
         <p className='urey'>{message}</p>
      </div>
    )
  }
}
