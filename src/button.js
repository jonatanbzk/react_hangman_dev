import React from 'react';


class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      color: ""
    }
  }

  changeColor() {
    this.setState({color: 'color'})
  }

  render(){
    let btn_class = this.state.color ? 'color' : ''

    return (
      <div className="key">
        <button className={btn_class}
                value=""
                onClick={this.changeColor.bind(this)}>
                {this.props.value}
        </button>
      </div>
    )
  }
}

export default Button;
