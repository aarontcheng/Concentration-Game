# Concentration Game

## How to Run
1. run "python3 server/server.py" to start flask server
2. cd into conc-game directory, the react app
3. run "npm start" for local running
4. if it says, "sh: react-scripts: command not found", then run "npm install ajv@latest ajv-keywords@latest" and repeat step 3

## Requirements:
1. Single player:
- Player first selects a card that flips over, then second card also flips and will be matched
    - If wrong, both cards will flip back after 3 seconds
    - If right, both cards will stay flipped face up

2. Stopwatch stops when all cards have been flipped over
- A player's fastest time is stored and shown on screen at all times
- Leaderboard of top 5 players shown

3. Button to restart or login with another account.

4. Players will log in with their username and password

5. If you don't login, you can still play but time won't be stored

## Plan for implementation

### Front End
- Using class component not function hook
- Create component for a generic card
- Use map function to create cards
- Create component for the display of the cards
- Create component for timer
- Create component to display the user name and fastest time
- Modals for restart and logout

#### Actual Implementation Plan
- Work on the actual game first
- Store all the data on the cards in the front end, like color, number, and image file link, in a card list, say list A
- Then in the state variable in the constructor of the App.js, use an update method that takes the card list and  uses a map to turn into a list of cards that should look like:
this.playingCards = Object.entries(this.list_A).map(([key, value]) =>
      <Col>
        <PlayingCard card = {value}><PlayingCard>
      </Col>
    );
- Then in the render function, it will return:
<Container>
        <Row xs="1" sm="1" md="2" lg="4">
          {this.playingCards}
        </Row>
</Container>

- We then need a variable for the first and second selected card, set by the (selectCard = (selectedCard)) function
- the selectCard function will be the onClick function for the playing cards
- it will check if the firstCard selected is null, and set it if it is null, and if it isn't, check that the firstCard isn't being clicked again, and then use a checkMatch function to see if they match
- will need to sleep for a bit to not let player choose more cards:
https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

- Now for the actual PlayingCards, will use classes and image tags. If flipped, show front of card. If not, show back
https://3dtransforms.desandro.com/card-flip 

- State variable for amount of pairs flipped. If cards flip is 52, then game ends. Checked with a gameOver function.

- If gameOver returns true, there will be a restart modal after the games over to show final time and option to restart



### Back End
- Put user credentials in body of request, so use PUT to enter username and password attempt to back end compare to hash, and then create a new token and send back if matches
- Flask server to connect
- for now, use json or csv file
- later use database.


