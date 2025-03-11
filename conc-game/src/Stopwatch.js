import { Card, CardSubtitle, CardTitle, CardBody } from "reactstrap";
import React, { Component } from "react";


class Stopwatch extends Component{
    constructor(props) {
        super(props);

        // We need ref in this, because we are dealing
        // with JS setInterval to keep track of it and
        // stop it when needed
        this.Ref = React.createRef();

        // The state for our timer
        this.state = {
            timer: "00:00:00",
        };

        this.returnSelf();
    }

    // Plan: use geek for geek's countdown timer and change to stopwatch

    getTimeRemaining = (e) => {
        const total = Date.parse(new Date()) - Date.parse(e) ;
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    startTimer = (e) => {
        let { total, hours, minutes, seconds } = this.getTimeRemaining(e);
        if (this.props.gameOver === false) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            this.setState({
                timer:
                    (hours > 9 ? hours : "0" + hours) +
                    ":" +
                    (minutes > 9 ? minutes : "0" + minutes) +
                    ":" +
                    (seconds > 9 ? seconds : "0" + seconds),
            });
        }
    };

    clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        this.setState({ timer: "00:00:00" });

        

        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (this.Ref.current) clearInterval(this.Ref.current);
        const id = setInterval(() => {
            this.startTimer(e);
        }, 1000);
        this.Ref.current = id;
    };

    getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if
        // you extend to add more time
        deadline.setSeconds(deadline.getSeconds());
        return deadline;
    };

    // We can use componentDidMount so that when the component
    // mount the timer will start as soon as possible
    componentDidMount() {
        this.clearTimer(this.getDeadTime());
    }

    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    onClickReset = () => {
        this.clearTimer(this.getDeadTime());
    };

    // callback for restarting
    restart = () =>{
        this.props.restart();
        this.onClickReset();
    }

    // I need a way for the parent app to call the clearTimer.

    returnSelf = () =>{
        this.props.callback(this);
    }

    render() {
        return (
            <div style={{ textAlign: "center", margin: "auto" }}>
                <h3>Timer</h3>
                <h2>{this.state.timer}</h2>
                <button onClick={this.restart}>Restart</button>
            </div>
        );
    }

} export default Stopwatch;
