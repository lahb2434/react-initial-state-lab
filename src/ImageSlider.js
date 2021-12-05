// your ImageSlider code here!
import React from "react";
import Bomb from "./Bomb";

class ImageSlider extends React.Component {
    constructor(){
        super();
    this.state = { currentSlideIndex: 0, currentBombCount: 10 };
    }

    increment = () => {
        this.setState({currentSlideIndex: this.state.currentSlideIndex + 1, currentBombCount: this.state.currentBombCount - 1})
        
    }

   

    render() {
    return <div>
      <div onClick={this.increment} >
        {this.state.currentSlideIndex === 10 ? null : `I am on slide ${this.state.currentSlideIndex}`}
      </div>
      <Bomb  count={this.state.currentBombCount}/>
    </div>
  }
}

export default ImageSlider;