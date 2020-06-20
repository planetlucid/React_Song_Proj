import React, { Component } from 'react';
 
import Songs from './Songs';
import './App.css';

const songs = [
    {
        title:"first song",
        img_url:"the link",
    },
    {
        title:"second song",
        img_url:"the link",
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
            
            <Songs songs={songs}/>
            </div>
        );
    }
}

export default App;