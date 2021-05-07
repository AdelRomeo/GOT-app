import React, {Component} from 'react'
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails/itemDetails";
import GotService from "../../../services/gotService";
import RowBlock from "../../rowBlock/rowBlock";

export default class CharacterPage extends Component {

  gotService = new GotService();

  state = {
    selectedChar: 41
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
        getData={this.gotService.getAllCharacters}
        renderItem={item => `${item.name} (${item.gender})`}
      />
    )

    const charDetails = (
      <ItemDetails selectedChar={this.state.selectedChar} serviceHandler={this.gotService.getCharacter}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
        <Field field='died' label='Died'/>
        <Field field='culture' label='Culture'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}