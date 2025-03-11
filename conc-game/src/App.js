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


  // setState info: GOAT https://www.reddit.com/r/react/comments/u5wzbu/components_not_rerendering_with_state_changes/
  //setState does shallow equality check before actually updating, so I will need to make a new map using new Map(existingMap)

  // for restart(), to easily reset to initial
  copyCommittedCards = new Map([
    [0, {"code": "JackRed", "imagePath": Jack_of_hearts, "isFlipped": false, "solved": false}],
    [1, {
      "code": "JackRed", 
      "imagePath": Jack_of_diamonds, 
      "isFlipped": false,
      "solved": false
    }],
    [2, {
      "code": "JackBlack", 
      "imagePath": Jack_of_clubs, 
      "isFlipped": false,
      "solved": false
    }],
    [3, {
      "code": "JackBlack", 
      "imagePath": Jack_of_spades, 
      "isFlipped": false,
      "solved": false
    }]
  ]
  );

  committedCards = new Map([
    [1, {"code": "JackRed", "imagePath": Jack_of_hearts, "isFlipped": false, "solved": false}],
    [0, {
      "code": "JackRed", 
      "imagePath": Jack_of_diamonds, 
      "isFlipped": false,
      "solved": false
    }],
    [2, {
      "code": "JackBlack", 
      "imagePath": Jack_of_clubs, 
      "isFlipped": false,
      "solved": false
    }],
    [3, {
      "code": "JackBlack", 
      "imagePath": Jack_of_spades, 
      "isFlipped": false,
      "solved": false
    }]
  ]
  );

  compareFn(a, b){
    return Math.floor(Math.random() * (2 - 0) ) + 0 - 1; // return random integer for -1 to 1
  }
  // https://stackoverflow.com/questions/31158902/is-it-possible-to-sort-a-es6-map-object?noredirect=1&lq=1
  randomMap = new Map([...this.committedCards.entries()].sort(this.compareFn));
  
  // This is not iterable, is actually just an object
  // committedCards = {
  //   0: {
  //     "code": "JackRed", 
  //     "imagePath": Jack_of_hearts, 
  //     "isFlipped": false,
  //     "solved": false
  //   },
  //   1: {
  //     "code": "JackRed", 
  //     "imagePath": Jack_of_diamonds, 
  //     "isFlipped": false,
  //     "solved": false
  //   },
  //   2: {
  //     "code": "JackBlack", 
  //     "imagePath": Jack_of_clubs, 
  //     "isFlipped": false,
  //     "solved": false
  //   },
  //   3: {
  //     "code": "JackBlack", 
  //     "imagePath": Jack_of_spades, 
  //     "isFlipped": false,
  //     "solved": false
  //   }

  // };

  // Not in state because not used as any components prop
  firstCardId = -1;
  firstCard = null;

  PAIRS_TO_WIN = 2;
  numPairs = 0;

  showingWrongMatch = false;

  constructor(props)
  {
      super(props);
      this.state = {
        showRestartModal: false,
        cardsInfo: this.committedCards
      };  
      this.randomMap.forEach((values, key) => {console.log(values, key)})
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
    if (this.firstCardId === id || card.props.card["solved"] == true || this.showingWrongMatch){
      console.log("bruh");
    }
    else if (this.firstCardId === -1){
      console.log("option 2");
      var newMap = new Map(this.committedCards);
      // For some reason, even tho we already set firstCardId, we can't use it. So I'm just using id instaed, which makes more sense honestly
      this.firstCardId = id;
      this.firstCard = card;

      // console.log("yo");
      // console.log(this.state.cardsInfo[id]["code"]);

      // Flipping selected card
      newMap.get(id)["isFlipped"] = true;
    
      // If we work with a copy of the existing map, we can get setState to actually set the state
      this.setState({cardsInfo: newMap});

    }
    else if (this.committedCards.get(id)["code"] === this.committedCards.get(this.firstCardId)["code"]){ // Matched
      console.log("Matched!!!!");

      var newMap = new Map(this.committedCards);

      this.numPairs = this.numPairs + 1;
      this.firstCardId = -1;
      newMap.get(id)["isFlipped"] = true;

      // Setting the cards' solved variable to true, this works so no need to change right now, although I would rather fix since I figured out setState with newMap
      this.firstCard.props.card["solved"] = true;
      card.props.card["solved"] = true;
      
      console.log(this.numPairs);
      
      
      this.setState({cardsInfo: newMap});


      // This is the only option where the player can win, so is where we check if they won
      this.checkGameOver();
    }
    else{ // Not a match, reset firstCardId. 
      console.log("Not Matched!!!!");

      var newMap = new Map(this.committedCards);
      // flip both cards back
      newMap.get(id)["isFlipped"] = true;
      card.flip();

      // So that shallow equality doesn't mess it up, since setting state two times
      this.setState({cardsInfo: new Map(newMap)});

      // For delay, adn to not let player select cards while in delay
      this.showingWrongMatch = true;
      await this.sleep(3000);
      this.showingWrongMatch = false;

      // By giving parameter to get the actual first card selected as component, I can straight up manipulate it from App
      
      newMap.get(id)["isFlipped"] = false;
      this.firstCard.props.card["isFlipped"] = false;
      this.firstCard.flip();
      card.flip();

      console.log(newMap.get(this.firstCardId)["code"] + ": " + newMap.get(this.firstCardId)["isFlipped"]);

      // reset to choose new first card
      this.firstCardId = -1;

  

      this.setState({cardsInfo: newMap});

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
    // Create copy of committedCards and then alter it. Then the setState will work. Before, I just had a copyCommittedCards that I would just make a new map of and then setState with it, but the copyCommittedCards ended up changing after the first restart, so couldn't do that
    var newMap = new Map(this.committedCards);
    newMap.forEach((values, key) => {newMap.get(key)["solved"] = false; newMap.get(key)["isFlipped"] = false;});
    
    this.setState({cardsInfo: new Map(newMap)});
    this.committedCards = new Map(newMap);
    this.numPairs = 0;
    this.turnOffRestart();
    console.log("restarting...");
    console.log(this.committedCards.get(0));
    console.log(this.copyCommittedCards.get(0));
  }

  login = () =>{

  }

  render() {
  return (
    <div className="App">
      {this.numPairs}
      <BoardTable cards={this.state.cardsInfo} callback={this.handleClick}></BoardTable>
      <RestartModal restart={this.restart} toggle= {this.turnOffRestart} login = {this.login} showModal={this.state.showRestartModal}></RestartModal>
    </div>
  )
}
}

export default App;
