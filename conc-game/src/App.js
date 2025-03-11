import Jack_of_hearts from './images/jack_of_hearts.png';
import Jack_of_diamonds from './images/jack_of_diamonds.png';
import Jack_of_clubs from './images/jack_of_clubs.png';
import Jack_of_spades from './images/jack_of_spades.png';
import './App.css';
import { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import PlayingCard from './PlayingCard';

class App extends Component{
  // Need to store the first clicked card, and then have callback functions given to PlayingCards
  // To return their code so we can compare

  // set to state variable to make constructor cleaner
  committedCards = {
    0: {
      "code": "JackRed", 
      "imagePath": Jack_of_hearts, 
      "isFlipped": false,
      "solved": false
    },
    1: {
      "code": "JackRed", 
      "imagePath": Jack_of_diamonds, 
      "isFlipped": false,
      "solved": false
    },
    2: {
      "code": "JackBlack", 
      "imagePath": Jack_of_clubs, 
      "isFlipped": false,
      "solved": false
    },
    3: {
      "code": "JackBlack", 
      "imagePath": Jack_of_spades, 
      "isFlipped": false,
      "solved": false
    }

  };

  // Not in state because not used as any components prop
  firstCardId = -1


  constructor(props)
  {
      super(props);
      this.state = {
        showRestartModal: false,
        numPairs: 0,
        cardsInfo: this.committedCards
      };        
      //No state needed for updates??
  }

  // To update cards after player does stuff
  update = () => {
    this.cards = Object.entries(this.committedCards).map(([key, value]) =>
      <Col>
        <PlayingCard id={key.toString()} card={value} callback={this.handleClick}></PlayingCard>
      </Col>
    );
  }

  // id is the key of the card
  // While working on this function, it would usually take two clicks to get the card to flip.
  // But after getting rid of some unnecessary uses of this.state.firstCardId, started doing it on one click for some reason
  handleClick = (id) => {
  
    if (this.firstCardId == id){
      console.log("bruh");
    }
    else if (this.firstCardId === -1){
      // For some reason, even tho we already set firstCardId, we can't use it. So I'm just using id instaed, which makes more sense honestly
      this.firstCardId = id;
      // console.log("yo");
      // console.log(this.state.cardsInfo[id]["code"]);

      // Flipping selected card
      this.state.cardsInfo[id]["isFlipped"] = true;
    
      this.setState({cards: this.cards});
      this.update();
    }
    else if (this.state.cardsInfo[id]["code"] === this.state.cardsInfo[this.firstCardId]["code"]){ // Matched
      console.log("Matched!!!!");
      this.setState({numPairs: this.state.numPairs + 1});
      this.firstCardId = -1
      this.state.cardsInfo[id]["isFlipped"] = true;
      
      console.log(this.state.numPairs);
      
      this.setState({cards: this.cards});
      this.update();
    }
    else{ // Not a match, reset firstCardId. 
      console.log("Not Matched!!!!");
      // flip both cards back
      this.state.cardsInfo[id]["isFlipped"] = false;
      this.state.cardsInfo[this.firstCardId]["isFlipped"] = false;

      // reset to choose new first card
      this.firstCardId = -1;

      console.log(this.state.cardsInfo[id]["isFlipped"]);

      this.setState({cardsInfo: this.state.cardsInfo});
      this.update();

    }
  }

  // handleClick needs to be before for this to work
  cards = Object.entries(this.committedCards).map(([key, value]) =>
    <Col>
      <PlayingCard id={key.toString()} card={value} callback={this.handleClick}></PlayingCard>
    </Col>
  );

  // Function to check if number of pairs is = to constant variable of number of pairs needed to win
  checkGameOver = () => {

  }

  render() {
  return (
    <div className="App">
      {this.state.numPairs}
      <Container>
        <Row xs="1" sm="1" md="2" lg="4">
          {this.cards}
        </Row>
      </Container>

    </div>
  )
}
}

export default App;
