import { Component } from "react";
import './App.css';
import {Row, Col, Container} from 'reactstrap';
import PlayingCard from './PlayingCard';


class Board extends Component {
  // Bringing it to main app, which has the list of card info
    handleClick = (id, card) => {
      this.props.callback(id, card);
    }

    // The map's entries() method turns it into iterable
    // Which allows  it to work with .map
    update = () => {
      return this.props.cards.entries().map(([key, value]) =>
        <Col style={{padding: "0px"}}>
          <PlayingCard style={{size: "auto"}} id={key} card={value} callback={this.handleClick}></PlayingCard>
        </Col>
      );
    };


    render() {
      return <div className="BoardTable">
       <Container style={{backgroundColor: "brown", width: "45pc", height: "40pc"}}>
        <Row>
          {this.update()}
        </Row>
      </Container>

    </div>

    }

}

export default Board;