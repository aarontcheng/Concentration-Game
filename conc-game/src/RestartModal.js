import { Component } from "react";
import { Input, Button, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
class RestartModal extends Component{
    // Using modal to pop up when the game is over to allow the user to restart or switch users

    constructor(props){
        super(props);
        this.state = {username: "", password: ""};
    }

    restart = () =>
    {
        this.props.restart();
        // reset defaults
        this.setState({name: "", password: ""});
    }

    // callback function will make POST request to Login path with username and password in body. Then 
    // App.js will get a token to save to its state, which it will use for getting just the user's fastest time for npw
    login = () =>{
        this.props.login();
    }

    // The e is what gets what's inside the element
    updateUsername = (e) =>{
        this.setState({username: e.target.value});
    }

    updatePassword = (e) =>{
        this.setState({username: e.target.value});
    }

    getTime = () =>{
        console.log("finalTime: " + this.props.finalTime);
        console.log("initialTime: " + this.props.initialTime);
        return (this.props.finalTime - this.props.initialTime)/1000;
    }

    render(){
        return <Modal isOpen={this.props.showModal} toggle={this.props.restart}>
            <ModalHeader>You Win!!! Time: {this.getTime()} seconds</ModalHeader>
            <ModalBody>
                <InputGroup>
                    <InputGroupText>Username</InputGroupText>
                    <Input placeholder="Username" onChange={this.updateUsername} defaultValue=""></Input>
                </InputGroup>
                <InputGroup>
                    <InputGroupText>Password</InputGroupText>
                    <Input placeholder="password" onChange={this.updatePassword} defaultValue=""></Input>
                </InputGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={this.restart}>Restart</Button>
                <Button color="primary" onClick={this.login}>Login</Button>
            </ModalFooter>

        </Modal>
    }
}

export default RestartModal;