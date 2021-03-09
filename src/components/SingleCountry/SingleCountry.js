import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SingleCountry = () => {
    const { name } = useParams();
    console.log(name);
    const [country, setCountry] = useState([]);
    const { name: countryName, flag, capital, region, population, area } = country;

    useEffect(() => {
        const url = `
        https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCountry(data[0]));
    }, [name]);

    return (
        <div
            className="container d-flex justify-content-center"
            style={{ marginTop: '100px', marginBottom: '100px' }}
        >
            <Card style={{ width: '30rem' }}>
                <Card.Img
                    variant="top"
                    style={{ height: '400px', objectFit: 'cover', width: '100%' }}
                    src={flag}
                />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>Name: {countryName}</Card.Title>
                        <h5>Capital: {capital}</h5>
                        <p>Region: {region}</p>
                        <p>Population: {population}</p>
                        <p>Area: {area}</p>
                        <Button as={Link} to="/" variant="primary">
                            Back
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};
export default SingleCountry;
