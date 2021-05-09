import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from "../randomChar/randomChar";
import CharacterPage from "../pages/characterPage/characterPage";
import BookPage from "../pages/bookPage/bookPage";
import BookItem from "../pages/bookItem/bookItem";
import ErrorMessage from "../errorMessage/errorMessage";
import './app.css';
import GotService from "../../services/gotService";
import HousePage from "../pages/housePage/housePage";
import {BrowserRouter as Router, Route} from 'react-router-dom';


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
      <Router>
        <div className='app'>
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
            <Route path='/characters' component={CharacterPage}/>
            <Route path='/houses' component={HousePage}/>
            <Route path='/books' exact component={BookPage}/>
            <Route path='/books/:id' render={
              ({match}) => {
                const {id} = match.params
                return <BookItem bookId={id}/>
              }

            }/>
          </Container>
        </div>
      </Router>
    );
  }
}