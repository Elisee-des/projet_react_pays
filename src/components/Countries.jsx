import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectRadio] = useState("");
    const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];

    //le useEffect se joue lorsque le composant est mise en place
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, [])

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                {radio.map((continent) => (
                    <li>
                        <input type="radio"
                            id={continent}
                            name="continentRadio"
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectRadio(e.target.id)} />
                        <label htmlFor={continent}>{continent} </label>
                    </li>
                ))}
            </ul>
            {selectedRadio && <button onClick={() => setSelectRadio("")}>Annuler la recherche</button>}
            <ul>
                {data
                    .filter((country) => country.continents[0].includes(selectedRadio))
                    .sort((a, b) => a.population - b.population)
                    .slice(0, rangeValue).map((country, index) => (
                        <Card key={index} country={country} />))
                }
            </ul>
        </div>
    );
};

export default Countries;

