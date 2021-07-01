import '../style/App.css';
import '../style/Combat.css';
import React, {useState, useEffect} from 'react';

function PokemonList({poke}){
    let [detailPokemon, setDetailPokemon] = useState({});
    console.log(poke)

    useEffect(() => {
        let lastCalled = true;

        const fetchData = async () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setDetailPokemon(data))
                .catch((e) => console.error(e));

        };


        fetchData();
        console.log(detailPokemon);
        return () => {
            lastCalled = false;
        };
    }, [poke]);

    if (!detailPokemon.name){
        return <></>;
    }
    return (
        <>
            <div style={{height: 50}}></div>
            <div className="card" style={{maxWidth: 500}}>
                <img className="card-img-top" src={detailPokemon.sprites.front_default} alt="Card image cap" height="200" />
                <div className="card-body" style={{color: 'black'}}>
                    <p className="card-text" style={{textTransform: "capitalize"}}>{detailPokemon.name}</p>
                </div>
            </div>
        </>
    )
}



function PokemonOne() {
    let [ name, setName] = useState("");
    //Récupération du nom du pokémon passé en paramètre dans l'url
    function getParameter(parameterName, defaultValue) {
        return new URLSearchParams(window.location.search).get(parameterName) ?? defaultValue;
    }
    useEffect(function() {
        setName(getParameter('name', 'fr'));
    }, []);


    return (
            <div className="App">
                <header className="App-header">
                    <PokemonList  poke={ name } ></PokemonList>
                </header>
            </div>
    );
}

export default PokemonOne;

