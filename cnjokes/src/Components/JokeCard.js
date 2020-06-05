import React from 'react';
import { Card } from 'reactstrap';

function JokeCard(props) {
	const { joke } = props;

	return ( 
		<Card>
			{joke}
		</Card>
	)
}

export default JokeCard