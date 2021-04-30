import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css'


export default class App extends Component {

  state ={
    visibleRandomChar: true
  }

  //переключение видимости блока с рандомным персонажем и отображение нового персонажа
  toggleRandomChar = () =>{
    this.setState({
      visibleRandomChar: !this.state.visibleRandomChar
    })
  }

  render() {
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
          <Row>
            <Col md='6'>
              <ItemList/>
            </Col>
            <Col md='6'>
              <CharDetails/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}