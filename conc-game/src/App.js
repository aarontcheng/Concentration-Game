import Jack_of_hearts from './images/jack_of_hearts.png';
import Jack_of_diamonds from './images/jack_of_diamonds.png';
import Jack_of_clubs from './images/jack_of_clubs.png';
import Jack_of_spades from './images/jack_of_spades.png';
import './App.css';
import { Component } from 'react';
import PlayingCard from './PlayingCard';
import BoardTable  from './BoardTable';
import { Col } from 'reactstrap';
import RestartModal from './RestartModal';


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
  firstCardId = -1;
  firstCard = null;

  PAIRS_TO_WIN = 2;
  numPairs = 0;

  constructor(props)
  {
      super(props);
      this.state = {
        showRestartModal: false,
        cardsInfo: this.committedCards
      };  
      // Prof rabb things v     
      //No state needed for updates??
  }

  // To update cards after player does stuff
  // update = () => {
  //   return Object.entries(this.state.cardsInfo).map(([key, value]) =>
  //     <Col>
  //       <PlayingCard id={key} card={value} callback={this.handleClick}></PlayingCard>
  //     </Col>
  //   );
  // }

  // id is the key of the card
  // While working on this function, it would usually take two clicks to get the card to flip.
  // But after getting rid of some unnecessary uses of this.state.firstCardId, started doing it on one click for some reason
  handleClick = async (id, card) => {
    console.log(this.committedCards);
    // If you're selecting same or card is already matched, won't do anything
    if (this.firstCardId === id || card.props.card["solved"] == true){
      console.log("bruh");
    }
    else if (this.firstCardId === -1){
      // For some reason, even tho we already set firstCardId, we can't use it. So I'm just using id instaed, which makes more sense honestly
      this.firstCardId = id;
      this.firstCard = card;

      // console.log("yo");
      // console.log(this.state.cardsInfo[id]["code"]);

      // Flipping selected card
      this.state.cardsInfo[id]["isFlipped"] = true;
    
      this.setState({cardsInfo: this.cardsInfo});

    }
    else if (this.committedCards[id]["code"] === this.committedCards[this.firstCardId]["code"]){ // Matched
      console.log("Matched!!!!");
      this.numPairs = this.numPairs + 1;
      this.firstCardId = -1;
      this.committedCards[id]["isFlipped"] = true;

      // Setting the cards' solved variable to true
      this.firstCard.props.card["solved"] = true;
      card.props.card["solved"] = true;
      
      console.log(this.numPairs);
      
      this.setState({cardsInfo: this.committedCards});


      // This is the only option where the player can win, so is where we check if they won
      this.checkGameOver();
    }
    else{ // Not a match, reset firstCardId. 
      console.log("Not Matched!!!!");
      // flip both cards back
      this.committedCards[id]["isFlipped"] = true;
      card.flip();

      // For delay
      await this.sleep(3000);

      // By giving parameter to get the actual first card selected as component, I can straight up manipulate it from App
      
      this.committedCards[id]["isFlipped"] = false;
      this.firstCard.props.card["isFlipped"] = false;
      this.firstCard.flip();
      card.flip();

      console.log(this.committedCards[this.firstCardId]["code"] + ": " + this.committedCards[this.firstCardId]["isFlipped"]);

      // reset to choose new first card
      this.firstCardId = -1;

  

      this.setState({cardsInfo: this.committedCards});

    }

  }

  // Function to delay flipping of cards
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  // Below functions deal with restarting the game with the Restart Modal

  // Function to check if number of pairs is = to constant variable of number of pairs needed to win
  checkGameOver = () => {
    if (this.numPairs === this.PAIRS_TO_WIN){
      // For each card, go through the list and set each one back to default values
      this.setState({showRestartModal: true});
      console.log("Yay");
    }
  }

  turnOffRestart = () =>{
    this.setState({showRestartModal: false});
  }

  restart = () =>{

  }

  render() {
  return (
    <div className="App">
      {this.numPairs}
      <BoardTable cards={this.state.cardsInfo} callback={this.handleClick}></BoardTable>
      <RestartModal callback={this.restart} cancel= {this.turnOffRestart} showModal={this.state.showRestartModal}></RestartModal>
    </div>
  )
}
}

export default App;
