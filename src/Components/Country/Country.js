import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flag, name, capital, region, population} = props.country
    return (
            <div className="col">
                <div className="card h-100">
                    <img className='card-img-top p-3 images-style img-fluid' src={flag} alt="" />
                    <div className="card-body">
                        <h1 className="card-title">Name: {name}</h1>
                        <h3>Capital: {capital}</h3>
                        <h5>Region: {region}</h5>
                        <p>Population: {population}</p>
                    </div>
                    <div className='card-footer'>
                    <button className='btn btn-success fw-bold px-4 py-2'>See Details</button>
                    </div>
                </div>
            </div> 
    );
};

export default Country;