import React, {Component} from 'react'
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import GotService from "../../services/gotService";
import itemList from "../itemList/itemList";
import RowBlock from "../rowBlock/rowBlock";

export default class CharacterPage extends Component {

  gotService = new GotService();

  state = {
    selectedChar: 41
  }

  //определение персонажа для отображения подробной информации
  onCharFullInfo = (id) => {
    this.setState({
      selectedChar: id
    })
  }


  render() {

    const itemList = (
      <ItemList
        onCharFullInfo={this.onCharFullInfo}
        getData={this.gotService.getAllCharacters}
        renderItem={item => `${item.name} (${item.gender})`}
      />
    )

    const charDetails = (
      <CharDetails selectedChar={this.state.selectedChar}/>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}