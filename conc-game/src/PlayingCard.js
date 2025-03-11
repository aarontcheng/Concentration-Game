import { Component } from "react";
import './App.css';

// Constructor's props will have object that has values for front and back image path, whether or not flipped, card number and color. The suite is not really necessary in concentration
// State will also include a class name for what's displaying the card, to know when it is flipped or not
class PlayingCard extends Component {
    nameOfClass = "card-inner";

    constructor(props){
        super(props);
        if (this.props.card["isFlipped"] === true){
            this.nameOfClass = "card-inner is-flipped";
        }
        else{
            console.log(this.props.card["code"] + " should be flipping to back now...");
            this.nameOfClass= "card-inner";
        }
    }

    handleClick = () => {
        this.props.callback(this.props.id, this);
        this.flip();
    }

    flip = () => {
        console.log("yooooooogoogog");
        if (this.props.card["isFlipped"] === true){
            this.nameOfClass = "card-inner is-flipped";
            return "card-inner is-flipped";
        }
        else{
            console.log(this.props.card["code"] + " should be flipping to back now...");
            this.nameOfClass =  "card-inner";
            return "card-inner";
        }
    }

    componentDidUpdate = () =>{
        this.flip();
        console.log("flipppp");
    }


    // Remember that react has some different names for attributes, one being class -> className
    // isFlipped is another attribute that deals with flipping the card
    render() {
      return <div className="card" onClick={this.handleClick}>
        <div className={this.flip()}>
            <div className="card-back">
                <p>Back</p>
            </div>
            <div className="card-front">
                <img src={this.props.card["imagePath"]} alt={this.props.card["code"]}></img>
            </div>
        </div>

    </div>

    }

}

export default PlayingCard;