import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let newOpa = this.props.opacity ;
    if (newOpa >= 0.2 ){
    return (
      <div className="color-box" style={{opacity: newOpa}}>
        {<ColorBox opacity={newOpa - 0.1}/>}
      </div>
    )
    }
    else {return null}
  }

}
