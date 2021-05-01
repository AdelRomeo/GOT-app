import React, {Component} from 'react';
import './itemList.css';
import GotService from "../../services/gotService";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

  gotService = new GotService();

  state = {
    charList: null
  }

  //получем список персонажей
  componentDidMount() {
    this.gotService.getAllCharacters()
      .then((charList) => {
        this.setState({
          charList
        })
        console.log(charList)
      })
  }

  renderCharList = (arr) => {
    return arr.map((char, i) => {
      console.log(i)
      return (
        <li
          key={i}
          className="list-group-item"
          //onClick={this.props.onCharFullInfo(i)}
        >
          {char.name}
        </li>
      )
    })
  }

  render() {

    //массив объектов персонажей
    const {charList} = this.state;

    if (!charList) {
      return <Spinner/>
    }

    //верстка для рендера
    const items = this.renderCharList(charList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}