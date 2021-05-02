import React, {Component} from 'react'
import {Col, Row, Container} from 'reactstrap'
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class CharacterPage extends Component {

  state ={
    selectedChar: 130
  }

  //определение персонажа для отображения подробной информации
  onCharFullInfo = (id)=>{
    this.setState({
      selectedChar: id
    })
  }


  render() {
    return (
      <Row>
        <Col md='6'>
          <ItemList onCharFullInfo={this.onCharFullInfo}/>
        </Col>
        <Col md='6'>
          <CharDetails selectedChar={this.state.selectedChar}/>
        </Col>
      </Row>
    )
  }
}