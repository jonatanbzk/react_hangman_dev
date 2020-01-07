import React from 'react';
//import Button from './button.js';
import './App.css';

const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const word = ["F", "U", "C", "K"]

const clickedKeys = []

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      color: ""
    }
  }

  onClick() {
    this.setState({color: 'color'});
    if (!clickedKeys.includes(this.props.value)) {
      clickedKeys.push(this.props.value);
    }
    console.log(clickedKeys);
  }

  render(){
    let btn_class = this.state.color ? 'color' : ''

    return (
      <div className="touche">
        <button className={btn_class}
                value=""
                onClick={this.onClick.bind(this)}>
                {this.props.value}
        </button>
      </div>
    )
  }
}


class App extends React.Component {

  render(){
    return(
   <React.Fragment>
      <div className="wordBloc">
       {word.map((letter) => (
	        <div className={"wordLetter"} key={letter}>
            __
          </div>
	        ))}
      </div>

      <div className="keyboard">
        {lettersArr.map((touche, index) => (
            <Button
              key={index}
              value={touche}>
            </ Button>
        ))}
      </div>
   </React.Fragment>
    )
  }

}

export default App;
