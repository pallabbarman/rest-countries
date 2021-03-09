import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
    const { country } = props;
    const { name, flag } = country;
    return (
        <div className="col-md-4 my-3 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                    variant="top"
                    src={flag}
                />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>{name}</Card.Title>
                        <Button as={Link} to={`/country/${name}`} variant="outline-primary">
                            Details
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CountryDetails;
