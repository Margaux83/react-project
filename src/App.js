import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import Route from "./Route";
import Zelda from "./Zelda"
import Pokemon from "./Pokemon"
import Combat from "./Combat"


/*function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg" style={{backgroundColor: "crimson", color: "white"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Combat !</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/zelda">Zelda monsters</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Pokemon monsters</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Combat</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}*/

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <IndexContent></IndexContent>
      </header>
    </div>
  );
}


export default () => {
    return (
        <div className="ui container">
            <Route path="/">
                <App />
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
        </div>
    )
}
