import React from 'react';
import { Card } from 'reactstrap';

export function JokeCard(props) {
    const { joke } = props;

    return ( 
        <Card>
            {joke}
        </Card>
    )
}