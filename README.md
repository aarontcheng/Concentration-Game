# Concentration Game

## MVP Requirements:
1. Single player mode: 52 cards face up for 7 seconds. Then flip back and stopwatch starts.
- Player first selects a card that flips over, then second card also flips and will be matched
    - If wrong, both cards will flip back after 3 seconds
    - If right, both cards will stay flipped face up

2. Stopwatch stops when all cards have been flipped over
- A player's fastest time is stored and shown on screen at all times

3. Button to restart or logout of account

4. Players will log in with their username and password

## Plan for implementation

### Front End
- Don't store data in database yet, but in a list, 
- Using component not function hook
- Create component for a generic card
- Use map to create 52 cards
- Create component for the display of the cards
- Create component for timer
- Create component to display the user name and fastest time
- Modals for restart and logout

### Back End
- Flask server to connect
- psql for database