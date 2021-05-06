import React, {Component} from 'react';
import './charDetails.css';
import GotService from "../../services/gotService";

//item - элемент с которым работаем
//field - поле
//label - заголовок поля
export const Field = ({char, field, label})=>{
  return(
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{char[field]}</span>
    </li>
  )
}

export default class CharDetails extends Component {

  state = {
    char: null
  }

  gotService = new GotService();

  showInfoChar() {
    if (!this.props.selectedChar) {
      return
    }
    this.gotService.getCharacter(this.props.selectedChar)
      .then(char => this.setState({char}))
  }

  componentDidMount() {
    this.showInfoChar()
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedChar !== prevProps.selectedChar){
      this.showInfoChar()
    }
  }

  render() {

    if (!this.state.char){
      return <span className='select-error'>Please select a character</span>
    }

    const {name} = this.state.char;
    const {char} = this.state;

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child)=>{
              return React.cloneElement(child, {char})
            })
          }
        </ul>
      </div>
    );
  }
}