import '../style/App.css';
import '../style/Combat.css';
import React, {useState, useEffect} from 'react';


function MonsterBlock(){
    const [pokemons, setPokemons] = useState([]);
    const [onePokemon, setOnePokemeon] = useState('');
    const [combatpokemon, setCombatpokemon] = useState({});


    const [zeldas, setZeldas] = useState([]);
    const [oneZelda, setOneZelda] = useState('');
    const [combatzelda, setCombatzelda] = useState({});

    ////////////////////useEffect Pokemon///////////////////
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

    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${onePokemon.name}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setCombatpokemon(data))
                .catch((e) => console.error(e));

        };


        fetchData();
        return () => {
            lastCalled = false;
        };
    }, [onePokemon.name]);

////////////Use effect Zelda//////////////////

    useEffect(() => {
        let lastCalled = true;
        const fetchTypes = () => {
            fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
                .then((response) => response.json())
                .then((results) => lastCalled && setZeldas(results["data"]));
        };
        fetchTypes();
        return () => {
            lastCalled = false;
        };
    }, []);


    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${oneZelda.name}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setCombatzelda(data["data"]))
                .catch((e) => console.error(e));

        };
        fetchData();
        return () => {
            lastCalled = false;
        };
    }, [oneZelda.name]);


    const handleClickPokemon = () => {
        const random = pokemons[Math.floor(Math.random() * pokemons.length)];
        setOnePokemeon(random);//value assigned here
    };

    const handleClickZelda = () => {
        const random = zeldas[Math.floor(Math.random() * zeldas.length)];
        setOneZelda(random);//value assigned here
    };


    /*
    On génère le premier pokémon
     */
    if (!onePokemon.name){
        return(
            <>
                <div>
                    <button className="generateMonster" onClick={handleClickPokemon}>Générer un pokémon</button>
                </div>
            </>
    )
    }


    /*
    On génère le premier monstre zelda
     */
    if (!oneZelda.name){
        return(
            <>
                <div>
                    <button className="generateMonster" onClick={handleClickZelda}>Générer un monstre Zelda</button>
                </div>
            </>
        )
    }

    function calc_winner() {
        let randomZelda = Math.floor(Math.random() * 4);
        let randomPokemon = Math.floor(Math.random() * 4);
        console.log(randomZelda);
        console.log(randomPokemon);


        if (randomZelda > randomPokemon) {
            return 'zelda'
        } else {
            return 'pokemon'
        }
    }

    function getWinner() {
        var winbtn = document.querySelector('#win_btn');

        var win = calc_winner();

        if(win == "zelda"){
            console.log( winbtn.dataset.zeldaname);
            console.log( winbtn.dataset.zeldaimg);
        }
        else{
            console.log(winbtn.dataset.pokemonname);
            console.log(winbtn.dataset.pokemonimg);
        }

        return (
            <>
                <div>
                    <h1 style={{color: "black"}}>Le vainqueur est le {win == 'pokemon' ?   winbtn.dataset.pokemonname : winbtn.dataset.zeldaname}</h1>
                </div>
            </>
        )
    }

    return(
        <>
            <div className="monsterBlock text-center">
            <div className="row">
                <div className="col-6">
                    <div className="card col mb-4 center">
                        <p style={{fontSize:25, color: "black"}}>Monstre Zelda</p>
                        <div>
                           <span>
                                {oneZelda.name}
                            </span>
                            <br/>
                            {( Object.entries(combatzelda).length !== 0) ?
                                <img  src={combatzelda.image} alt="Card image cap" width="300" height="300" />
                                : ""}
                            <h4  style={{textTransform: "capitalize", color: "black"}}>{combatzelda.name}</h4>
                            <br/>
                            <button className="generateMonster" onClick={handleClickZelda}>Générer un autre monstre Zelda</button>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="col-6">
                    <div className="card col mb-4 center" >
                        <p style={{fontSize:25, color: "black"}}>Monstre Pokémon</p>
                        <div>
                           <span>
                                {onePokemon.name}
                           </span>
                            <br/>
                            {( Object.entries(combatpokemon).length !== 0) ?
                                <img  src={combatpokemon.sprites.front_default} alt="Card image cap" width="300" height="300"  />
                                : ""}
                            <h4 style={{textTransform: "capitalize", color: "black"}}>{combatpokemon.name}</h4>
                            <br/>
                            <button className="generateMonster" onClick={handleClickPokemon}>Générer un autre pokémon</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className="containerButton h-100">
                    <button className="buttonBeginCombat" id="win_btn" data-pokemonname={combatpokemon.name} data-pokemonimg={combatpokemon.sprites.front_default} data-zeldaname={combatzelda.name} data-zeldaimg={combatzelda.image} onClick={getWinner} type={"submit"} >Lancer un combat</button>
                </div>
                
                <br/>
            </div>
        </>
    )
}


function Combat() {

    return (
        <div className="App">
            <header className="App-header">
                <MonsterBlock></MonsterBlock>
            </header>
        </div>
    );
}


export default Combat;