import React from 'react';
import Button from './button.js';
import './App.css';

const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const word = ["F", "U", "C", "K"]

class App extends React.Component {
  render(){
    return(
   <React.Fragment>
      <div className="wordBloc">
       {word.map((letter) => (
	   <div className={"wordLetter"}> {letter} </div>
	))}
      </div>
      <div className="keyboard">
        {lettersArr.map((key) => (
            <Button value={key}>  </ Button>
        ))}
      </div>
   </React.Fragment>
    )
  }

}

export default App;
