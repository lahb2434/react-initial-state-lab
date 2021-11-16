// your Bomb code here!
import React from "react";

export default class Bomb extends React.Component {

    decrement = (props) => {
        console.log(props) 
        return props === 0 ? 'Boom!' : `${props} seconds left before I go boom!`
    }

  render() {
        return <div>{ this.decrement(this.props.count) }</div> 
    }
}