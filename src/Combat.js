import logo from './logo.svg';
import './App.css';
import './Combat.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from "./Pokemon";


function MonsterBlock(){
    return(
        <>
            <div className="row">
                <div className="card col mb-4 center">
                <p style={{fontSize:25}}>Monstre Zelda</p>
                </div>
                <br/><br/><br/>
                <div className="card col mb-4 center" >
                <p style={{fontSize:25}}>Monstre Pokémon</p>
                </div>
            </div>
        </>
    )
}


function BeginCombat(){

    return (
        <>
            <div className="containerButton h-100">
                        <button className="buttonBeginCombat"  type={"submit"} >Lancer un combat</button>
            </div>

            <div className="monsterBlock text-center">
                <MonsterBlock></MonsterBlock>
            </div>
        </>
    )
}

function Combat() {

    return (
                <BeginCombat></BeginCombat>
    );
}

export default Combat;