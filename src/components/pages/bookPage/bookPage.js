import React, {Component} from 'react'
import ItemList from "../../itemList";
import GotService from "../../../services/gotService";
import {withRouter} from 'react-router-dom'

class BookPage extends Component {

  gotService = new GotService();

  render() {

    return (
      <ItemList
        onItemFullInfo={(itemId)=>{
          this.props.history.push(`/books/${itemId}`)
        }}
        getData={this.gotService.getAllBooks}
        renderItem={item => `${item.name}`}
      />
    )
  }
}

export default withRouter(BookPage)