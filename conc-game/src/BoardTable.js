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

    // This will be used for selected a random index from what's remaining
    selectFromRemaining = () =>{

    }

    // The map's entries() method turns it into iterable
    // Which allows  it to work with .map
    update = () => {
      return this.props.cards.entries().map(([key, value]) =>
        <Col>
          <PlayingCard id={key} card={value} callback={this.handleClick}></PlayingCard>
        </Col>
      );
    };
    

    componentDidUpdate = () =>{
      console.log("it is updating");
    }


    render() {
      return <div className="BoardTable">
        yoooo
       <Container>
        <Row xs="4" sm="4" md="8" lg="16">
          {this.update()}
        </Row>
      </Container>

    </div>

    }

}

export default BoardTable;