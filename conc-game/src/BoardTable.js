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

    things = Object.entries(this.props.cards).map(([key, value]) =>
        <Col>
          <PlayingCard id={key} card={value} callback={this.handleClick}></PlayingCard>
        </Col>
    );


    render() {
      return <div className="BoardTable">
        yoooo
        {this.props.updateKey}
       <Container>
        <Row xs="1" sm="1" md="2" lg="4">
          {this.things}
        </Row>
      </Container>

    </div>

    }

}

export default BoardTable;