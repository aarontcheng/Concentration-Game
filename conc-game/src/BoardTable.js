import { Component } from "react";
import './App.css';
import {Row, Col, Container} from 'reactstrap';
import PlayingCard from './PlayingCard';


class BoardTable extends Component {

    constructor(props){
        super(props);
        console.log("hellooooo?");
    }

    // Bringing it to main app, which has the list of card info
    handleClick = (id, card) => {
      this.props.callback(id, card);
    }

    playingCards = Object.entries(this.props.cards).map(([key, value]) =>
        <Col>
          <PlayingCard id={key} card={value} callback={this.handleClick}></PlayingCard>
        </Col>
    );


    render() {
      return <div className="BoardTable">
        yoooo
       <Container>
        <Row xs="4" sm="4" md="8" lg="16">
          {this.playingCards}
        </Row>
      </Container>

    </div>

    }

}

export default BoardTable;