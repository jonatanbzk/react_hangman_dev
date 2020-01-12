import React from 'react';
import './App.css';
import Words from './Words.js';

const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const BUTTON = ({ touche, onClick, value, feedback}) => (
  <div className="touche">
    <button className={feedback} onClick={() => onClick(touche)}>
            {value}
    </button>
  </div>
)

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    word: this.generateWord(),
    clickedKeys: [],
    attempt: 0,
    goodAttempt: 0,
  }
}

    generateWord() {
      const randNbr = Math.floor(Math.random() * Math.floor(848))
      const word = Words[randNbr].toUpperCase().split("")
      return word
    }

    getFeedBack(index) {
      const { clickedKeys } = this.state
      if (clickedKeys.includes(index)) {
        return 'color'
      }
    }

    handleKeyClick = touche => {
    const { clickedKeys, attempt, goodAttempt } = this.state
    if (!this.state.clickedKeys.includes(touche)) {
      this.setState({ clickedKeys: [...clickedKeys, ...touche] })
      this.setState({ attempt: attempt +1 })
    }
    if (!this.state.clickedKeys.includes(touche) && this.state.word.includes(touche)) {
      let count = this.state.word.filter(w => w === touche).length
      this.setState({ goodAttempt: goodAttempt +count })
    }
  }

    restartGame = () => {
      this.setState({ word : this.generateWord() })
      this.setState({ attempt: 0 })
      this.setState({ goodAttempt: 0 })
      this.setState({ clickedKeys: [] })
    }

  render(){
    const won = this.state.goodAttempt === this.state.word.length
    return(
   <React.Fragment>
      <div className="wordBloc">
       {this.state.word.map((letter, index) => (
	        <div className={"wordLetter"} key={index}>
            {this.state.clickedKeys.includes(letter) ? letter : "_"}
          </div>
	        ))}
      </div>
      {!won ?
      <div className="keyboard">
        {lettersArr.map((touche, index) => (
            <BUTTON
              touche={touche}
              feedback={this.getFeedBack(touche)}
              key={touche}
              value={touche}
              onClick={this.handleKeyClick}>
              {touche}
            </ BUTTON>
        ))}
      </div> :
        <p>
          <button type="button"
                  id="restartGame"
                  onClick={this.restartGame}>
                  New Game
          </button>
        </p>
      }
     <div className="score">
      <br />
      Attempt : {this.state.attempt} <br />
     </div>
   </React.Fragment>
    )
  }
}

export default App;
