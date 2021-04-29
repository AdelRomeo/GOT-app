import React, {Component} from 'react';
import './randomChar.css';
import GotService from "../../services/gotService";
import Spinner from "../spinner/spinner";

//компонент генерирует споказ случайного персонажа
export default class RandomChar extends Component {

  constructor() {
    super();
    this.upDateChar();
  }

  gotService = new GotService();

  state = {
    char: {
      name: null,
      gender: null,
      born: null,
      died: null,
      culture: null
    },
    loading: true
  }

  //получаем данные от сервера и вносим их в state
  upDateChar() {
    //генерируем рандомное число от 10 до 150
    const id = Math.floor(Math.random() * 150 + 10);
    //изменияем state
    this.gotService.getCharacter(id)
      .then(({name, gender, born, died, culture}) => {
        this.setState({char: {name, gender, born, died, culture}, loading: false})
      })
  }

  render() {

    const {char: {name, gender, born, died, culture}, loading} = this.state;

    return (

      <div className="random-block rounded">
        {loading ? <Spinner/> :
          <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{gender}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{born}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{died}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{culture}</span>
              </li>
            </ul>
          </>
        }
      </div>
    );
  }
}
