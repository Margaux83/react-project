import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';


function RMList({rm,setRMUrl}){
    let [infosLocation, setInfosLocation] = useState({});
    console.log(infosLocation);

    useEffect(() => {
        let lastCalled = true;

        const fetchData = async () => {
            fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${rm}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setInfosLocation(data["data"]))
                .catch((e) => console.error(e));

        };


        fetchData();
        console.log( fetchData());
        return () => {
            lastCalled = false;
        };
    }, [rm]);

    if (!infosLocation.id){
        return <></>;
    }
    return (
        <>
            <div style={{height: 50}}></div>
            <div className="card" style={{maxWidth: 500}}>
                <img className="card-img-top" src={infosLocation.image} alt="Card image cap" height="200" />
                <div className="card-body" style={{color: 'black'}}>
                    <h2 className="card-text" style={{textTransform: "capitalize"}}>{infosLocation.name}</h2>
                    <h5 className="card-title" style={{textTransform: "capitalize"}}>{infosLocation.description}</h5>

                </div>
            </div>
        </>
    )
}

function RMtAllList({setRM}){
    let [arts, setArts] = useState([]);
    let [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        let lastCalled = true;
        const fetchTypes = () => {
            fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
                .then((response) => response.json())
                .then((data) => lastCalled && setArts(data["data"]));
        };
        fetchTypes();
        return () => {
            lastCalled = false;
        };
    }, []);

    const handleSelection = (event) => {
        setRM(event.target.value);
        setSelectedValue(event.target.value);
    }

    return(
        <>
            <h1>Choisissez un monstre</h1>
            <select value={selectedValue} onChange={handleSelection} style={{textTransform: "capitalize"}}>
                {arts.map(({id, name})=>(
                    <option  key={id} value={id} style={{textTransform: "capitalize"}}>
                        {name}
                    </option>
                ))}
            </select>

        </>
    )
}


function Zelda() {

    let [selectedRM, setSelectedRM] = useState("");
    let [selectedRMUrl, setSelectedRMUrl] = useState(null);

    return (
        <div className="App">
            <header className="App-header">
                <RMtAllList setRM={setSelectedRM}></RMtAllList>
                <RMList rm={selectedRM} setRMUrl={setSelectedRMUrl}></RMList>
            </header>
        </div>
    );
}

export default Zelda;
