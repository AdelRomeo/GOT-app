import React, {Component} from 'react';
import GotService from "../../../services/gotService";
import ItemDetails, {Field} from "../../itemDetails/itemDetails";

export default class BookItem extends Component {

  gotService = new GotService();

  render() {
    return (
      <ItemDetails selectedChar={this.props.bookId} serviceHandler={this.gotService.getBook}>
        <Field field='authors' label='Authors'/>
        <Field field='country' label='Country'/>
        <Field field='publisher' label='Publisher'/>
        <Field field='released' label='Released'/>
      </ItemDetails>
    )
  }

}