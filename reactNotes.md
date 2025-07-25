# React Notes

## Setup
1. Download Node.js (For the JS runtime env)

2. Run the command: <b> npx create-vite < name > -- --template react </b>
    </br>
    Creating with vite for the extra tools it provides
    <br>

3. Then go into the created direc and <b>npm install</b>

4. Go to the package.json file and change
<br>
<b>"dev": "vite" to "dev": "vite --open"</b>
<br>
<b>"build": "vite build" to "build": "vite build --base==./"</b>
<br>
These autostart the web browser on the dev build and makes sure the prod build sets the right home respectively

5. Then in src/index.css, get rid of the "display:flex;" in the body styling, this is mostly if you're using gitlab, not sure if this affects anything else

## How to use
The <b>node_modules</b> should not be directly touched, using yarn and npm commands manages it. Make sure to not put it in your git repo, just do npm install on your local when you pull it. <b>Deleting and installing again is "have you turned it on and off" equivalent</b>

<b>public/</b> is where all the static or stuff that doesn't change content is stored. <b>src/</b> is where all the single page application stuff, the main development of the website. Dynamic

Static content is like the title of it, the logo, the stylesheets, images

---

In src, the App.js is where everything happens, the head of all the children and their children.

React stores and handles data throughout the parents and children with state and props.

Let's start with the big parent, App.js, with a child, Card.js.

App.js has a data structure for all the state variables it has., like a string name. It can then put that state variable inside of a child, like Card.js. This child will then use the state variable given to it and put it inside of a data structure called the props. 

When a state variable gets changed in anyway, then the children that have that state variable as their prop will get updated. However, the vice versa is not true. You would need to write code to return new values to the parent, which the parent would then have to handle to update the state.


## Class Component
You should get an option between making the app in class or function

import { Component } from 'react'

App.js is the highest level

Make it extend component like:

class App extends Component {

} export default App

Where do you write what displays in each component tho?

Classes use a render function like:

render(){

    return (

        All the html stuff
    )
}

Inside of the html stuff, you can put the regular tags like
\<div>, but also other Components that you create and import

like

import Stopwatch from './Stopwatch

These imported components are gonna be the children of the App component

Now, how specifically do we do state and props with parents and children?

Make a constructor like

constructor(props){

    super(props);
    this.state = {
        gameOver = false,
        currentName = "",
        initialTime = Date.now()
    }
}

Then you can call them inside on the render function using this.state.variable_name

You can also save time by setting this.state to a variable

If you wanna change a state variable, then you use the this.setState({variable: new})

Now to do props, first we gotta make a component inside the render function

\<Stopwatch propVar1={this.state.variable} propVar2={this.state.variable2}>

Then inside that component, those variables will be stored in the props, you can get the variables through

this.props.propVar1

However, due to limitations of react, sometimes props don't update immediately after the state in the parent is changed, so its good to put it in a variable separate from the prop, in case it goes null



## Function Hook

Honestly really similar to class component, 

function App(props){

}

or 

const App = (props) => {
    return (
        
    );
}

You can instantiate state with

const [variable, function] = useState(")

function variableSelection(value){
    setVariable(value);
}

return(

    \<div>
    <Headings></Headings>
    <Controls variableSelection={variable}></Controls>

    <div>
    <Menu selectionCallback={variableSelection}></Menu>
)

which gets us into hooks

useState is for state data
useEffect 
useRef

useState is what initializes the variable and the function to set it.

