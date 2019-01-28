import React, {Component} from 'react';
import './App.css';
import Navbar from './components/organisms/NavBar'
import Footer from './components/organisms/Footer'
import Home from './components/pages/Home'
import RecommendMovie from './components/pages/RecommendMovie'
import SingleMovie from './components/pages/SingleMovie'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/recommend' component={RecommendMovie}/>
                        <Route path='/:movie_title/:movie_year' component={SingleMovie}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
