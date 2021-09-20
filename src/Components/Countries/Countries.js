import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])
    return (
        <div className='country'>
            <h1 className='fw-bold heading mb-4 text-success'>Showing {countries.length} Countries</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto'>
                {
                    countries.map(country => <Country key={country.name} country={country} />)
                }
            </div>

        </div>
    );
};

export default Countries;