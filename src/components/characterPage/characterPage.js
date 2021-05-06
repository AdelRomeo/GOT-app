import React, {Component} from 'react'
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import GotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";
import {Field} from "../charDetails/charDetails";

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
      <CharDetails selectedChar={this.state.selectedChar}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
        <Field field='died' label='Died'/>
        <Field field='culture' label='Culture'/>
      </CharDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}