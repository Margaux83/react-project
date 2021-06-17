import logo from './logo.svg';
import './App.css';
import './Combat.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

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
    const { name } = useParams();
    return (
        <>
            <PokemonList poke={ name } ></PokemonList>
        </>
    );
}

export default PokemonOne;

