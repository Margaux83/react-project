import logo from './logo.svg';
import './Pokemon.css';
import React, {useState, useEffect} from 'react';
import PokemonOne from "./PokemonOne";
import Route from "./Route";
import Link from "./Link";




function PokemonAllList({setPoke}){
    let [pokemons, setPokemons] = useState([]);
    let [ setSelectedValue] = useState("");

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



    return(
        <>


            <h2 style={{color: "black"}}>Liste des pokémons :</h2>


                {pokemons.map(({name})=>(
                    <div>

                      <Link className="nav-link active text-dark display_img" href={`/detail-pokemon?name=${name}`}>
                          <h4 style={{textTransform: "capitalize", color: "black"}}>{name}</h4>
                      </Link>

                    </div>
                ))}

        </>
    )
}

function Pokemon() {
    let [ setSelectedPoke] = useState("");
    return (
        <div className="App">
            <header className="App-header">
            <PokemonAllList setPoke={setSelectedPoke}></PokemonAllList>
            </header>
        </div>
    );
}



export default Pokemon;