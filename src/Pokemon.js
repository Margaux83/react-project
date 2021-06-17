import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonOne from "./PokemonOne";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function PokemonAllList({setPoke}){
    let [pokemons, setPokemons] = useState([]);
    let [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        let lastCalled = true;
        const fetchTypes = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=248&offset=248`)
                .then((response) => response.json())
                .then((results) => lastCalled && setPokemons(results["results"]));
        };
        fetchTypes();

        return () => {
            lastCalled = false;
        };
    }, []);

    const handleSelection = (event) => {
        setPoke(event.target.value);
        setSelectedValue(event.target.value);
    }



    return(
        <>

            <h1>Les monstres pokemon</h1>

                {pokemons.map(({name})=>(
                    <div>
                        <Link className="nav-link active text-dark" to={`/detail-pokemon/${name}`}>
                            <h2>{name}</h2>
                        </Link>
                    </div>


                ))}

        </>
    )
}

function Pokemon() {
    let [selectedPoke, setSelectedPoke] = useState("");
    let [selectedRMUrl, setSelectedPokeUrl] = useState(null);
    return (
        <div className="App">
            <header className="App-header">
            <PokemonAllList setPoke={setSelectedPoke}></PokemonAllList>
            </header>
        </div>
    );
}



export default Pokemon;