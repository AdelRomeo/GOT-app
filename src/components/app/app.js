import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from "../randomChar/randomChar";
import CharacterPage from "../pages/characterPage/characterPage";
import BookPage from "../pages/bookPage/bookPage";
import ErrorMessage from "../errorMessage/errorMessage";
import './app.css'
import ItemList from "../itemList";
import ItemDetails from "../itemDetails/itemDetails";
import GotService from "../../services/gotService";


export default class App extends Component {

  gotService = new GotService();

  state = {
    visibleRandomChar: true,
    errorApp: false
  }

  //переключение видимости блока с рандомным персонажем и отображение нового персонажа
  toggleRandomChar = () => {
    this.setState({
      visibleRandomChar: !this.state.visibleRandomChar
    })
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorApp: true
    })
  }

  render() {

    if (this.state.errorApp) {
      return <ErrorMessage/>
    }

    return (
      <>
        <Container>
          <Header/>
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 5, offset: 0}}>
              {this.state.visibleRandomChar ? <RandomChar/> : null}
              <button onClick={this.toggleRandomChar} className='toggleChar'>Toggle random char</button>
            </Col>
          </Row>
          <CharacterPage/>
          <BookPage/>
          <Row>
            <Col md='6'>
              <ItemList
                //onCharSelected={this.onCharSelected}
                getData={this.gotService.getAllHouses}
                renderItem={item => `${item.name}`}
              />
            </Col>
            <Col md='6'>
              <ItemDetails charId={this.state.visibleRandomChar}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}