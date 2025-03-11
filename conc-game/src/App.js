import Jack_of_hearts from './images/64px-Jack_of_hearts.svg.png';
import './App.css';
import { Component } from 'react';
import PlayingCard from './PlayingCard';

class App extends Component{
  // Need to store the first clicked card, and then have callback functions given to PlayingCards
  // To return their code so we can compare

  initialCards = {
    0: {
    "code": "JackRed", 
    "imagePath": Jack_of_hearts, 
    "isFlipped": false
    }

  };

  constructor(props)
  {
      super(props);
      this.state = {
        showRestartModal: false,
        firstCardId: -1,
        numPairs: 0,
        cards: this.initialCards
      };        
      //No state needed for updates??
  }

  // id is the key of the card
  handleClick = (id) => {
    // Triple = is strict equality
    if (this.state.firstCardId === -1){
      this.setState({firstCardId: id});
      return 0;
      // If return exit code 0 to PlayingCard, they will add is-flipped to class name to flip card
    }
    else if (this.state.cards[id]["code"] === this.state.cards[this.state.firstCardId]["code"]){ // Matched
      this.setState({numPairs: this.state.numPairs + 1, firstCardId: -1});
      return 1;
      // if return exit code 1 to PlayingCard, they will flip to front of the card until game over
    }
    else{ // Not a match, reset firstCardId. 
      
      // all this is just for resetting the first card selected to show back
      let newCard = this.state.cards[this.state.firstCardId];
      newCard["isFlipped"] = false;
      let newCards = this.state.cards;
      newCards[this.state.firstCardId] = newCard;
      this.setState({cards: newCards})

      // reset to choose new first card
      this.setState({firstCardId: -1});

      return 2;
      // if return exit code 2 to PlayingCard, they will wait 3 seconds before flipping
    }
  }

  // Function to check if number of pairs is = to constant variable of number of pairs needed to win
  checkGameOver = () => {

  }

  render() {
  return (
    <div className="App">
      hi
      <PlayingCard id={0} card={this.state.cards[0]} callback={this.handleClick}></PlayingCard>
    </div>
  )
}
}

export default App;
