import logo from './logo.svg';
import './App.css';
import './Combat.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from "./Pokemon";

function RandomMonsterZelda(){
    const [posts, setPosts] = useState([]);
    const [onePost, setOnePost] = useState('');
    const [combatzelda, setCombatzelda] = useState({});

    useEffect(() => {
        let lastCalled = true;
        const fetchTypes = () => {
            fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
                .then((response) => response.json())
                .then((results) => lastCalled && setPosts(results["data"]));
        };
        fetchTypes();
        return () => {
            lastCalled = false;
        };
    }, []);


    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${onePost.name}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setCombatzelda(data["data"]))
                .catch((e) => console.error(e));

        };
        fetchData();
        return () => {
            lastCalled = false;
        };
    }, [onePost.name]);


    const handleClick = () => {
        const random = posts[Math.floor(Math.random() * posts.length)];
        setOnePost(random);//value assigned here
    };

    if (!onePost.name){
        return <>  <div>
            <button className="generateMonster" onClick={handleClick}>Générer un monstre Zelda</button>


        </div></>;
    }

    return (
        <>
            <div>
               <span>

                    {onePost.name}
           </span><br/>
                {( Object.entries(combatzelda).length !== 0) ?
                    <img className="card-img-top"  src={combatzelda.image} alt="Card image cap" width="100" height="500" />
                    : ""}
                <button className="generateMonster" onClick={handleClick}>Générer un autre monstre Zelda</button>


            </div>
        </>
    );
}



function RandomMonsterPokemon(){
    const [posts, setPosts] = useState([]);
    const [onePost, setOnePost] = useState('');
    const [combatpokemon, setCombatpokemon] = useState({});

    useEffect(() => {
        let lastCalled = true;
        const fetchTypes = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=248&offset=248`)
                .then((response) => response.json())
                .then((results) => lastCalled && setPosts(results["results"]));
        };
        fetchTypes();
        return () => {
            lastCalled = false;
        };
    }, []);

    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${onePost.name}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setCombatpokemon(data))
                .catch((e) => console.error(e));

        };


        fetchData();
        console.log(combatpokemon);
        return () => {
            lastCalled = false;
        };
    }, [onePost.name]);




    const handleClick = () => {
        const random = posts[Math.floor(Math.random() * posts.length)];
        setOnePost(random);//value assigned here
    };

    if (!onePost.name){
        return <>  <div>
            <button className="generateMonster" onClick={handleClick}>Générer un monstre pokémon</button>


        </div></>;
    }

    return (
        <>
            <div>
               <span>

                    {onePost.name}
           </span><br/>
                {( Object.entries(combatpokemon).length !== 0) ?
                    <img className="card-img-top"  src={combatpokemon.sprites.front_default} alt="Card image cap" width="10" height="500" />
                    : ""}
                <button className="generateMonster" onClick={handleClick}>Générer un autre monstre Zelda</button>


            </div>
        </>
    );
}


function MonsterBlock(){
    return(
        <>
            <div className="row">
                <div className="card col mb-4 center">
                    <p style={{fontSize:25}}>Monstre Zelda</p>
                    <RandomMonsterZelda></RandomMonsterZelda>
                </div>
                <br/><br/><br/>
                <div className="card col mb-4 center" >
                    <p style={{fontSize:25}}>Monstre Pokémon</p>
                    <RandomMonsterPokemon></RandomMonsterPokemon>
                </div>
            </div>
        </>
    )
}


function BeginCombat(){

    return (
        <>
            <div className="monsterBlock text-center">
                <MonsterBlock></MonsterBlock>
            </div>
            <div className="containerButton h-100">
                <button className="buttonBeginCombat"  type={"submit"} >Lancer un combat</button>
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