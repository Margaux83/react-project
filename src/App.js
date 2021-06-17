import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Zelda from "./Zelda"
import Combat from "./Combat"
import Pokemon from "./Pokemon"
import PokemonOne from "./PokemonOne";








export default function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg" style={{backgroundColor: "crimson", color: "white"}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize: 25}}>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Combat !</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/zelda">Zelda monsters</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/pokemon">Pokemon Monsters</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/combat">Combat</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/combat">
                        <Combat />
                    </Route>
                    <Route path="/zelda">
                        <Zelda />
                    </Route>
                    <Route path="/pokemon">
                        <Pokemon />
                    </Route>
                    <Route path="/detail-pokemon/:name">
                        <PokemonOne />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <IndexContent></IndexContent>
            </header>
        </div>
    );
}
function IndexContent(){
    return (
        <>
            <div className="card-deck">
                <div className="row">
                    <div className="card border-dark mb-4" style={{maxWidth: 400, margin: 2}}>
                        <div className="card-header" ><h2 style={{color: "black"}}>Zelda monsters</h2></div>
                        <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img/zelda-logo.jpg`}  alt="Card image cap" height="300" width="600"/>
                        <div className="card-body text-primary">
                            <h5 className="card-text">Découvrez les monstres de l'univers Zelda Breath of The
                                Wild</h5>
                            <button type="button" className="btn btn-success"><a style={{textDecoration: "none", color: "white"}} href="/zelda">See more</a></button>
                        </div>
                    </div>
                    <div className="card border-dark mb-3" style={{maxWidth: 400, margin: 2}}>
                        <div className="card-header"><h2 style={{color: "black"}}>Pokemon monsters</h2></div>
                        <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img/pokemon-logo.jpg`} alt="Card image cap" height="300" width="600"/>
                        <div className="card-body text-primary">
                            <h5 className="card-text">Découvrez les monstres de l'univers Pokémon</h5>
                            <button type="button" className="btn btn-success"><a style={{textDecoration: "none", color: "white"}} href="/pokemon">See more</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}



