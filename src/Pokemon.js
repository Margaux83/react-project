import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function PokemonList({poke,setPokeUrl}){
    let [infosPokemon, setInfosPokemon] = useState({});

    useEffect(() => {
        let lastCalled = true;

        const fetchData = async () => {
            fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${poke}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setInfosPokemon(data["species"]))
                .catch((e) => console.error(e));

        };


        fetchData();
        console.log(infosPokemon);
        return () => {
            lastCalled = false;
        };
    }, [poke]);

    if (!infosPokemon.name){
        return <></>;
    }
    return (
        <>
            <div style={{height: 50}}></div>
            <div className="card" style={{maxWidth: 500}}>
                <img className="card-img-top" alt="Card image cap" height="200" />
                <div className="card-body" style={{color: 'black'}}>
                    <p className="card-text">{infosPokemon.name}</p>
                </div>
            </div>
        </>
    )
}

function PokemonAllList({setPoke}){
    let [pokemons, setPokemons] = useState([]);
    let [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        let lastCalled = true;
        const fetchTypes = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/`)
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
            <h1>Choisissez un monstre</h1>
            <select value={selectedValue} onChange={handleSelection}>
                {pokemons.map(({id, name})=>(
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>

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
                <PokemonList poke={selectedPoke} setPokeUrl={setSelectedPokeUrl}></PokemonList>
            </header>
        </div>
    );
}

export default Pokemon;