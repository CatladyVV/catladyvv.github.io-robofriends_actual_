import React from 'react';
import CardsDB from '../components/CardsDB.js';
import SearchBox from '../components/SearchBox.js';
// import {robots} from './robots';
import { Component } from 'react';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js'

// PROPS dont change
// STATE=description of app= object
// STATE >> props 
// parent tell child what state, child receive state and dont change and keep as props.

// const state = {
//     robots: robots,
//     searchfield: ''
// }

// const App = () => {
//     return (
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox/>
//             <CardsDB robots={robots}/>
//         </div>
//     );
// }

class App extends Component{
    constructor(){ 
        super()
        this.state={
            // robots: robots, //robots from app are state vs. props from CardsDB
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({robots:users})});
    }

    onSearchChange=(event)=>{ //everytime you create function and its not prebuilt(ex.constructor/render), make it arrow function
        this.setState({searchfield: event.target.value }) //so that filter would work. if absent searchfield stay the same
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots= robots.filter(
            robot=> {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            }
        )
        // if(robots.length === 0){
        // if(!robots.length){
        //     return <h1>Loading</h1>
        // } else{
            // return (
        return !robots.length ?
        <h1>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardsDB robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
            // );
        // }
    }
}

export default App;
