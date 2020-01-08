import React from 'react';
import './App.css';

const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const word = ["H", "E", "L", "L", "O"]


const Button = ({ touche, onClick, value }) => (

  <div className="touche">
    <button onClick={() => onClick(touche)}>
            {value}
    </button>
  </div>
)

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    color: "",
    clickedKeys: ["X"],
  }
}


    handleKeyClick = touche => {
    const { clickedKeys, color } = this.state
    this.setState({color: 'color'});
    if (!this.state.clickedKeys.includes(touche)) {
      this.setState({ clickedKeys: [...clickedKeys, ...touche] })
    }
    console.log(touche);
    console.log(this.state.clickedKeys);
    console.log(this.state.color)
  }

  render(){
    let btn_class = this.state.color ? 'color' : ''

    return(
   <React.Fragment>
      <div className="wordBloc">
       {word.map((letter, index) => (
	        <div className={"wordLetter"} key={index}>
            {this.state.clickedKeys.includes(letter) ? letter : "_"}
          </div>
	        ))}
      </div>

      <div className="keyboard">
        {lettersArr.map((touche, index) => (
            <Button
              touche={touche}
              key={index}
              value={touche}
              onClick={this.handleKeyClick}>
              {touche}
            </ Button>
        ))}
      </div>
   </React.Fragment>
    )
  }

}

export default App;
