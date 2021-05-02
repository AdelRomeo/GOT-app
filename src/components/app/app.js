import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from "../characterPage/characterPage";
import ErrorMessage from "../errorMessage/errorMessage";
import './app.css'


export default class App extends Component {

  state ={
    visibleRandomChar: true,
    errorApp: false
  }

  //переключение видимости блока с рандомным персонажем и отображение нового персонажа
  toggleRandomChar = () =>{
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

    if (this.state.errorApp){
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
        </Container>
      </>
    );
  }
}