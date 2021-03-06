import React, {Component} from 'react';
import './randomChar.css';
import GotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

//компонент генерирует споказ случайного персонажа
export default class RandomChar extends Component {

  gotService = new GotService();

  state = {
    char: {
      name: null,
      gender: null,
      born: null,
      died: null,
      culture: null
    },
    loading: true,
    error: false
  }

  componentDidMount() {
    this.upDateChar();
    //this.timerId = setInterval(()=>this.upDateChar(), 4000)
  }

  componentWillUnmount() {
    //clearInterval(this.timerId)
  }


  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  //получаем данные от сервера и вносим их в state
  upDateChar() {
    //генерируем рандомное число от 10 до 150
    const id = Math.floor(Math.random() * 150 + 10);
    //изменияем state
    this.gotService.getCharacter(id)
      .then(({name, gender, born, died, culture}) => {
        this.setState({char: {name, gender, born, died, culture}, loading: false,})
      })
      .catch(this.onError)
  }

  render() {

    const {char: {name, gender, born, died, culture}, loading, error} = this.state;

    return (

      <div className="random-block rounded">
        {loading ? <Spinner/> : error ? <ErrorMessage/> :
          <>
            <h4>Random Character: {name || 'not found...'}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{gender || 'not found...'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{born || 'not found...'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{died || 'not found...'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{culture || 'not found...'}</span>
              </li>
            </ul>
          </>
        }
      </div>
    );
  }
}
