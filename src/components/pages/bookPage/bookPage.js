import React, {Component} from 'react'
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails/itemDetails";
import GotService from "../../../services/gotService";
import RowBlock from "../../rowBlock/rowBlock";

export default class BookPage extends Component {

  gotService = new GotService();

  state = {
    selectedChar: 1,
  }

  //определение элемента для отображения подробной информации
  onItemFullInfo = (id) => {
    this.setState({
      selectedChar: id
    })
  }


  render() {


    const itemList = (
      <ItemList
        onItemFullInfo={this.onItemFullInfo}
        getData={this.gotService.getAllBooks}
        renderItem={item => `${item.name}`}
      />
    )

    const bookDetails = (
      <ItemDetails selectedChar={this.state.selectedChar} item={this.gotService.getBook}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
        <Field field='died' label='Died'/>
        <Field field='culture' label='Culture'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={bookDetails}/>
    )
  }
}