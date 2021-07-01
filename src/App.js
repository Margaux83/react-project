import './style/App.css';
import React from "react"
import Zelda from "./components/Zelda"
import Combat from "./components/Combat"
import Pokemon from "./components/Pokemon"
import PokemonOne from "./components/PokemonOne";
import Route from "./router/Route"


export default function App() {
    return (
        <div className="ui container">
            <Route path="/">
                <Home />
            </Route>
            <Route path="/zelda">
                <Zelda />
            </Route>
            <Route path="/pokemon">
                <Pokemon />
            </Route>
            <Route path="/combat">
                <Combat />
            </Route>
            <Route path="/detail-pokemon">
                <PokemonOne />
            </Route>
        </div>
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
                            <h5 className="card-text">Api qui contient des informations sur l'univers de Zelda Breath of the Wild (tels que les monstres, les armes, les animaux, etc.), ici j'ai utilisé les informations sur les monstres.</h5>
                            <button type="button" className="btn btn-success"><a style={{textDecoration: "none", color: "white"}} href="/zelda">See more</a></button>
                        </div>
                    </div>
                    <div className="card border-dark mb-3" style={{maxWidth: 400, margin: 2}}>
                        <div className="card-header"><h2 style={{color: "black"}}>Pokemon monsters</h2></div>
                        <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img/index.jpeg`} alt="Card image cap" height="300" width="600"/>
                        <div className="card-body text-primary">
                            <h5 className="card-text">Api qui contient des informations sur les pokémons (liste des prokémons, images, stats, et.)</h5>
                            <button type="button" className="btn btn-success"><a style={{textDecoration: "none", color: "white"}} href="/pokemon">See more</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
