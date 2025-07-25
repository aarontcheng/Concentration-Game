// Thank you God for search and replace, could just spam enter button to replace for each number
import ace_of_hearts from './images/ace_of_hearts.png';
import ace_of_diamonds from './images/ace_of_diamonds.png';
import ace_of_clubs from './images/ace_of_clubs.png';
import ace_of_spades from './images/ace_of_spades.png';

import two_of_hearts from './images/2_of_hearts.png';
import two_of_diamonds from './images/2_of_diamonds.png';
import two_of_clubs from './images/2_of_clubs.png';
import two_of_spades from './images/2_of_spades.png';

import three_of_hearts from './images/3_of_hearts.png';
import three_of_diamonds from './images/3_of_diamonds.png';
import three_of_clubs from './images/3_of_clubs.png';
import three_of_spades from './images/3_of_spades.png';

import four_of_hearts from './images/4_of_hearts.png';
import four_of_diamonds from './images/4_of_diamonds.png';
import four_of_clubs from './images/4_of_clubs.png';
import four_of_spades from './images/4_of_spades.png';

import five_of_hearts from './images/5_of_hearts.png';
import five_of_diamonds from './images/5_of_diamonds.png';
import five_of_clubs from './images/5_of_clubs.png';
import five_of_spades from './images/5_of_spades.png';

import six_of_hearts from './images/6_of_hearts.png';
import six_of_diamonds from './images/6_of_diamonds.png';
import six_of_clubs from './images/6_of_clubs.png';
import six_of_spades from './images/6_of_spades.png';

import seven_of_hearts from './images/7_of_hearts.png';
import seven_of_diamonds from './images/7_of_diamonds.png';
import seven_of_clubs from './images/7_of_clubs.png';
import seven_of_spades from './images/7_of_spades.png';

import eight_of_hearts from './images/8_of_hearts.png';
import eight_of_diamonds from './images/8_of_diamonds.png';
import eight_of_clubs from './images/8_of_clubs.png';
import eight_of_spades from './images/8_of_spades.png';

import nine_of_hearts from './images/9_of_hearts.png';
import nine_of_diamonds from './images/9_of_diamonds.png';
import nine_of_clubs from './images/9_of_clubs.png';
import nine_of_spades from './images/9_of_spades.png';

import ten_of_hearts from './images/10_of_hearts.png';
import ten_of_diamonds from './images/10_of_diamonds.png';
import ten_of_clubs from './images/10_of_clubs.png';
import ten_of_spades from './images/10_of_spades.png';

import jack_of_hearts from './images/jack_of_hearts2.png';
import jack_of_diamonds from './images/jack_of_diamonds2.png';
import jack_of_clubs from './images/jack_of_clubs.png';
import jack_of_spades from './images/jack_of_spades.png';

import queen_of_hearts from './images/queen_of_hearts2.png';
import queen_of_diamonds from './images/queen_of_diamonds2.png';
import queen_of_clubs from './images/queen_of_clubs2.png';
import queen_of_spades from './images/queen_of_spades2.png';

import king_of_hearts from './images/king_of_hearts2.png';
import king_of_diamonds from './images/king_of_diamonds2.png';
import king_of_clubs from './images/king_of_clubs2.png';
import king_of_spades from './images/king_of_spades2.png';

import './App.css';
import { Component } from 'react';
import BoardTable  from './Board';
import RestartModal from './RestartModal';
import { Button, Card, CardTitle, CardBody, Col, Row, CardGroup} from 'reactstrap';
import Stopwatch from './Stopwatch';


class App extends Component{
  // Need to store the first clicked card, and then have callback functions given to PlayingCards
  // To return their code so we can compare


  // setState info: GOAT https://www.reddit.com/r/react/comments/u5wzbu/components_not_rerendering_with_state_changes/
  //setState does shallow equality check before actually updating, so I will need to make a new map using new Map(existingMap)

  committedCards = new Map([
    [0, {"code": "AceBlack", "imagePath": ace_of_clubs, "isFlipped": false, "solved": false}],
    [1, {"code": "AceBlack", "imagePath": ace_of_spades, "isFlipped": false, "solved": false}],
    // [2, {"code": "AceRed", "imagePath": ace_of_diamonds, "isFlipped": false, "solved": false}],
    // [3, {"code": "AceRed", "imagePath": ace_of_hearts, "isFlipped": false,"solved": false}],

    // [4, {"code": "2Black", "imagePath": two_of_spades, "isFlipped": false,"solved": false}],
    // [5, {"code": "2Black", "imagePath": two_of_clubs, "isFlipped": false,"solved": false}],
    [6, {"code": "2Red", "imagePath": two_of_hearts, "isFlipped": false,"solved": false}],
    [7, {"code": "2Red", "imagePath": two_of_diamonds, "isFlipped": false,"solved": false}],

    [8, {"code": "3Black", "imagePath": three_of_spades, "isFlipped": false,"solved": false}],
    [9, {"code": "3Black", "imagePath": three_of_clubs, "isFlipped": false,"solved": false}],
    // [10, {"code": "3Red", "imagePath": three_of_hearts, "isFlipped": false,"solved": false}],
    // [11, {"code": "3Red", "imagePath": three_of_diamonds, "isFlipped": false,"solved": false}],

    [12, {"code": "4Black", "imagePath": four_of_spades, "isFlipped": false,"solved": false}],
    [13, {"code": "4Black", "imagePath": four_of_clubs, "isFlipped": false,"solved": false}],
    // [14, {"code": "4Red", "imagePath": four_of_hearts, "isFlipped": false,"solved": false}],
    // [15, {"code": "4Red", "imagePath": four_of_diamonds, "isFlipped": false,"solved": false}],

    // [16, {"code": "5Black", "imagePath": five_of_spades, "isFlipped": false,"solved": false}],
    // [17, {"code": "5Black", "imagePath": five_of_clubs, "isFlipped": false,"solved": false}],
    [18, {"code": "5Red", "imagePath": five_of_hearts, "isFlipped": false,"solved": false}],
    [19, {"code": "5Red", "imagePath": five_of_diamonds, "isFlipped": false,"solved": false}],

    [20, {"code": "6Black", "imagePath": six_of_spades, "isFlipped": false,"solved": false}],
    [21, {"code": "6Black", "imagePath": six_of_clubs, "isFlipped": false,"solved": false}],
    // [22, {"code": "6Red", "imagePath": six_of_hearts, "isFlipped": false,"solved": false}],
    // [23, {"code": "6Red", "imagePath": six_of_diamonds, "isFlipped": false,"solved": false}],

    // [24, {"code": "7Black", "imagePath": seven_of_spades, "isFlipped": false,"solved": false}],
    // [25, {"code": "7Black", "imagePath": seven_of_clubs, "isFlipped": false,"solved": false}],
    [26, {"code": "7Red", "imagePath": seven_of_hearts, "isFlipped": false,"solved": false}],
    [27, {"code": "7Red", "imagePath": seven_of_diamonds, "isFlipped": false,"solved": false}],

    [28, {"code": "8Black", "imagePath": eight_of_spades, "isFlipped": false,"solved": false}],
    [29, {"code": "8Black", "imagePath": eight_of_clubs, "isFlipped": false,"solved": false}],
    // [30, {"code": "8Red", "imagePath": eight_of_hearts, "isFlipped": false,"solved": false}],
    // [31, {"code": "8Red", "imagePath": eight_of_diamonds, "isFlipped": false,"solved": false}],

    // [32, {"code": "9Black", "imagePath": nine_of_spades, "isFlipped": false,"solved": false}],
    // [33, {"code": "9Black", "imagePath": nine_of_clubs, "isFlipped": false,"solved": false}],
    [34, {"code": "9Red", "imagePath": nine_of_hearts, "isFlipped": false,"solved": false}],
    [35, {"code": "9Red", "imagePath": nine_of_diamonds, "isFlipped": false,"solved": false}],

    [36, {"code": "10Black", "imagePath": ten_of_spades, "isFlipped": false,"solved": false}],
    [37, {"code": "10Black", "imagePath": ten_of_clubs, "isFlipped": false,"solved": false}],
    // [38, {"code": "10Red", "imagePath": ten_of_hearts, "isFlipped": false,"solved": false}],
    // [39, {"code": "10Red", "imagePath": ten_of_diamonds, "isFlipped": false,"solved": false}],

    // [40, {"code": "JackBlack", "imagePath": jack_of_spades, "isFlipped": false,"solved": false}],
    // [41, {"code": "JackBlack", "imagePath": jack_of_clubs, "isFlipped": false,"solved": false}],
    [42, {"code": "JackRed", "imagePath": jack_of_hearts, "isFlipped": false,"solved": false}],
    [43, {"code": "JackRed", "imagePath": jack_of_diamonds, "isFlipped": false,"solved": false}],

    // [44, {"code": "QueenBlack", "imagePath": queen_of_spades, "isFlipped": false,"solved": false}],
    // [45, {"code": "QueenBlack", "imagePath": queen_of_clubs, "isFlipped": false,"solved": false}],
    [46, {"code": "QueenRed", "imagePath": queen_of_hearts, "isFlipped": false,"solved": false}],
    [47, {"code": "QueenRed", "imagePath": queen_of_diamonds, "isFlipped": false,"solved": false}],

    [48, {"code": "KingBlack", "imagePath": king_of_spades, "isFlipped": false,"solved": false}],
    [49, {"code": "KingBlack", "imagePath": king_of_clubs, "isFlipped": false,"solved": false}],
    // [50, {"code": "KingRed", "imagePath": king_of_hearts, "isFlipped": false,"solved": false}],
    // [51, {"code": "KingRed", "imagePath": king_of_diamonds, "isFlipped": false,"solved": false}],

  ]
  );

  // For randomly shuffling cards
  compareFn(a, b){
    return Math.floor(Math.random() * (2 - 0) ) + 0 - 1; // return random integer from -1 to 1, to replicate actual sorting output
  }

  shuffle = (map) =>{
    return new Map([...map.entries()].sort(this.compareFn));
  }
  // https://stackoverflow.com/questions/31158902/is-it-possible-to-sort-a-es6-map-object?noredirect=1&lq=1
  // initial shuffler
  committedCards = new Map([...this.committedCards.entries()].sort(this.compareFn));

  // Not in state because not used as any components prop
  firstCardId = -1;
  firstCard = null;

  PAIRS_TO_WIN = 13;
  numPairs = 0;

  // To prevent clicking other cards while showing wrong match
  showingWrongMatch = false;

  // The state version of this is there for when I put it into a component, but this one is used cause its faster
  currentName = ""

  constructor(props)
  {
      super(props);
      this.state = {
        // Show login page at start up
        showRestartModal: true,
        cardsInfo: this.committedCards,
        initialTime: Date.now(),
        finalTime: Date.now(),
        gameOver: false,
        stopwatch: null,
        leaderboard: "",
        currentUserName: "",
        currentUserKey: "",
        currentUserFastest: ""
      };  
      // this.committedCards.forEach((values, key) => {console.log(values, key)})
  }

  // For getting stopwatch
  returnSelf = (sw) =>{
    this.setState({stopwatch: sw})
  }



  // id is the key of the card
  // While working on this function, it would usually take two clicks to get the card to flip.
  // But after getting rid of some unnecessary uses of this.state.firstCardId, started doing it on one click for some reason
  handleClick = async (id, card) => {
    // If you're selecting same or card is already matched, won't do anything
    if (this.firstCardId === id || card.props.card["solved"] === true || this.showingWrongMatch || this.state.gameOver === true){
      console.log("bruh");
    }
    else if (this.firstCardId === -1){
      // console.log("option 2");
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
      // console.log("Matched!!!!");

      var newMap = new Map(this.committedCards);

      this.numPairs = this.numPairs + 1;
      this.firstCardId = -1;
      newMap.get(id)["isFlipped"] = true;

      // Setting the cards' solved variable to true, this works so no need to change right now, although I would rather fix since I figured out setState with newMap
      this.firstCard.props.card["solved"] = true;
      card.props.card["solved"] = true;
      
      // console.log(this.numPairs);
      
      this.setState({cardsInfo: newMap});


      // This is the only option where the player can win, so is where we check if they won
      this.checkGameOver();
    }
    else{ // Not a match, reset firstCardId. 
      // console.log("Not Matched!!!!");

      var newMap = new Map(this.committedCards);
      // flip both cards back
      newMap.get(id)["isFlipped"] = true;
      card.flip();

      // So that shallow equality doesn't mess it up, since setting state two times
      this.setState({cardsInfo: new Map(newMap)});

      // For delay, adn to not let player select cards while in delay
      this.showingWrongMatch = true;
      await this.sleep(1000);
      this.showingWrongMatch = false;

      // By giving parameter to get the actual first card selected as component, I can straight up manipulate it from App
      
      newMap.get(id)["isFlipped"] = false;
      this.firstCard.props.card["isFlipped"] = false;
      this.firstCard.flip();
      card.flip();

      // console.log(newMap.get(this.firstCardId)["code"] + ": " + newMap.get(this.firstCardId)["isFlipped"]);

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

      // get the time now so give to restart modal for final time
      this.setState({showRestartModal: true, finalTime: Date.now(), gameOver: true});
      // console.log("game over");

      this.setFastestTime(this.state.currentUserName, this.state.currentUserKey, Math.floor((Date.now() - this.state.initialTime) / 1000));

    }
  }

  turnOffRestart = () =>{
    this.setState({showRestartModal: false});
  }

  restart = async () =>{
    // Create copy of committedCards and then alter it. Then the setState will work. Before, I just had a copyCommittedCards that I would just make a new map of and then setState with it, but the copyCommittedCards ended up changing after the first restart, so couldn't do that
    
    // To not let user click any more cards, lest they break it while the states finishing up
    this.setState({gameOver: true});

    var newMap = new Map(this.committedCards);
    // console.log("176");
    newMap.forEach((values, key) => {newMap.get(key)["solved"] = false; newMap.get(key)["isFlipped"] = false;});
    
    // Reset to default values
    this.setState({cardsInfo: new Map(newMap)});
    this.committedCards = new Map(newMap);
    this.numPairs = 0;
    this.turnOffRestart();
    this.firstCardId = -1;
    await this.sleep(1000);
    
    var secondNewMap = new Map(this.committedCards);
    secondNewMap = this.shuffle(secondNewMap);
    

    // To prevent player from seeing the new order of cards when they flip back
    

    this.setState({cardsInfo: secondNewMap, initialTime: Date.now(), finalTime: Date.now(), gameOver: false})
    this.committedCards = secondNewMap;
    // To reset timer, since modal doesn't have access to stopwatch
    this.state.stopwatch.onClickReset();
    // console.log(this.committedCards.get(0));
    
  }

  // *******************************************************
  // APIIIIIIIII STUUUUUUFFFFFFFFFFFf
  // *******************************************************

  getTime = () => {
    //Call "http://localhost:5000" directly 
    // now that CORS is set up in Flask
    // Seems like url was using losalhost, so that was causing cors issue

    // Just realized that if anyone named themselves login, that would cause major issues. probably why query string is usually better
    // Will circumvent by creating a login user with a password even I'll forget
    console.log(this.currentName, "name");
    let url = 'http://127.0.0.1:5000/user/' + this.currentName;
    console.log(url);
    fetch(url)
      .then(
         (response) => 
         {
          console.log("Brooooooo");
          console.log(response);
            if (response.status === 200)
            {
              return (response.json());
            }
            else
            {
              console.log("HTTP error:" + response.status + ":" +  response.statusText);
              return ("N/A");
            }
         }
      )//The promise response is returned
      .then ((output) => 
        {
          // console.log("it should be displaying now");
          this.updateTime(output);
        }
      )
      .catch((error) => 
        {
          console.log(error);
        } 
      )

  }

  getLeaderboard = () => {
    //Call "http://localhost:5000" directly 
    // now that CORS is set up in Flask
    // Seems like url was using losalhost, so that was causing cors issue
    fetch('http://127.0.0.1:5000/leaderboard')
      .then(
         (response) => 
         {
          // console.log(response)
            if (response.status === 200)
            {
              return (response.json());
            }
            else
            {
              console.log("HTTP error:" + response.status + ":" +  response.statusText);
              return ([ ["status ", response.status]]);
            }
         }
      )//The promise response is returned, then we extract the json data
      .then ((jsonOutput) => //jsonOutput now has result of the data extraction
        {
          this.updateLeaderboard(jsonOutput);
        }
      )
      .catch((error) => 
        {console.log(error);
          this.updateLeaderboard("");
        } 
      )

  }

  // The leaderboard is going to be a single string for now, can make each position be an object if I want to
  updateLeaderboard = (apiResponse) => {
    // console.log(apiResponse, "This is the response");
    console.log(apiResponse[0], "This is the object");

    // Initial string
    var display = "";

    console.log(apiResponse.length, "length");
    // For some reason, using for loop wouldn't work (when I would console.log the user, it would return a number instead)
    for (let i = 0; i < apiResponse.length; i++){
      let user = apiResponse[i];
      console.log(user);
      if (user["fastest_time"] === -1){
        display += user["name"] + ": " + "N/A\n"
      }
      else{
        display += user["name"] + ": " + user["fastest_time"] + " seconds\n"
      }
      
    }

    console.log(display)
    this.setState({leaderboard: display})
  }

  updateTime = (apiResponse) => {
    // console.log(apiResponse, "This is the response");
    console.log(apiResponse, "This is the object");

    // Initial string
    var display = "Fastest Time: \n" + apiResponse + " seconds";

    // For some reason, using for loop wouldn't work (when I would console.log the user, it would return a number instead)

    console.log(display)
    this.setState({currentUserFastest: display})
  }

  login = (_name, _password) =>{
    let url = 'http://127.0.0.1:5000/user/login';

    let jData = JSON.stringify({
      name: _name,
      password: _password
    });

    fetch(url,
      {
        method: 'POST',
        body: jData,
        headers: {"Content-type": "application/json; charset = UTF-8"}
      }
    ).then(
      (response) => {
        if (response.status === 200){
          return (response.json());
        }
        else{
          return([["status ", response.status]]);
        }
      }
    ).then((jsonOutput) => {
      // The jsonOutput might need a name change since this should just return the session key, not a json value
      this.setState({currentUserName: _name, currentUserKey: jsonOutput});
      this.currentName = _name;
      console.log(this.currentName);
      console.log(jsonOutput, "key");

      this.getTime();
    }).catch((error) => {
      console.log(error);
    })
  }

  setFastestTime = (_name, _sessionKey, _time) =>{
    let url = 'http://127.0.0.1:5000/user';

    let jData = JSON.stringify({
      name: _name,
      sessionKey: _sessionKey,
      time: _time
    });

    fetch(url,
      {
        method: 'PUT',
        body: jData,
        headers: {"Content-type": "application/json; charset = UTF-8"}
      }
    ).then(
      (response) => {
        if (response.status === 200){
          return (response.json());
        }
        else{
          return([["status ", response.status]]);
        }
      }
    ).then((jsonOutput) => {
      // The jsonOutput might need a name change since this should just return the session key, not a json value
      this.getLeaderboard();
    }).catch((error) => {
      console.log(error);
    })
  }

  componentDidMount(){
    console.log(this.getLeaderboard());
    console.log(this.getTime())
  }

  // *******************************************************
  // ENDDDDDD OFFFFFFFF APIIIIIIIII STUUUUUUFFFFFFFFFFFf
  // *******************************************************

  // The pre-wrap is there for \n to not be disregarded since it's whitespace
  render() {
  return (
    <div className="App">
      <h1>Concentration Game</h1>
      <br></br>

      <CardGroup style={{backgroundColor: "darkGreen", maxWidth: "fit-content", marginLeft: "auto", marginRight: "auto", gap: "10px"}}>
        <Card style={{whiteSpace: "pre-wrap", minWidth: "fit-content", maxWidth: "25%", minHeight: "fit-content", border: "0px", padding: "5px"}}>
            <CardTitle>Leaderboard</CardTitle>
            <CardBody>
              {this.state.leaderboard}
            </CardBody>
        
          </Card>

          <Card style={{minWidth: "fit-content", whiteSpace: "pre-wrap", minHeight: "fit-content", border: "0px", padding: "5px"}}>
            <CardTitle>High Score</CardTitle>
            <CardBody>
              {this.state.currentUserName}
              <br/>
              {this.state.currentUserFastest}
            </CardBody>
          </Card>

          <Stopwatch initialTime={this.state.initialTime} gameOver={this.state.gameOver} restart={this.restart} callback={this.returnSelf}></Stopwatch>
      </CardGroup>
    
      <BoardTable cards={this.state.cardsInfo} callback={this.handleClick}></BoardTable>
      <RestartModal currentName={this.state.currentUserName} initialTime={this.state.initialTime} finalTime={this.state.finalTime} restart={this.restart} toggle= {this.turnOffRestart} login = {this.login} showModal={this.state.showRestartModal}></RestartModal>
    </div>
  )
}
}

export default App;
