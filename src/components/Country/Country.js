import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    return (
        <div>
            <Container mt={5}>
                <br />
                <br />
                <br />
                <Row>
                    {countries.map((country) => (
                        <CountryDetails country={country} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Country;
