import React, {Component} from 'react';
import './itemList.css';
import GotService from "../../services/gotService";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

  gotService = new GotService();

  state = {
    itemList: null
  }

  //получем список персонажей
  componentDidMount() {

    const {getData} = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        })
      })
  }

  //получение цифр из строки url
  getNumbers = (string) => {
    const arr = string.match(/\d/g);
    let id = ''
    arr.forEach(i => id += i)
    return parseInt(id)
  }


  //список элементов помещаемых на страницу (список персонажей, книг, домов)
  renderItemsList = (arr) => {
    return arr.map((item) => {
      const id = this.getNumbers(item.url)
      //получаем name из item
      const label = this.props.renderItem(item)
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onCharFullInfo(id)}
        >
          {label}
        </li>
      )
    })
  }

  render() {

    //массив объектов персонажей
    const {itemList} = this.state;

    if (!itemList) {
      return <Spinner/>
    }

    //верстка для рендера
    const items = this.renderItemsList(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}