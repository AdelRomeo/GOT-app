import React, {Component} from 'react'
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails/itemDetails";
import GotService from "../../../services/gotService";
import RowBlock from "../../rowBlock/rowBlock";

export default class HousePage extends Component {

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
        getData={this.gotService.getAllHouses}
        renderItem={item => `${item.name}`}
      />
    )

    const bookDetails = (
      <ItemDetails selectedChar={this.state.selectedChar} serviceHandler={this.gotService.getHouses}>
        <Field field='region' label='Region'/>
        <Field field='words' label='Words'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={bookDetails}/>
    )
  }
}