import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Error = () => {
	return (
		<Alert variant="light">
			<Alert.Heading>Oops!! Looks like something went wrong.</Alert.Heading>
			<hr />
			<div className="mb-3">You can try visiting the home page</div>
			<div className="mb-3">
				<Link to="/">
					<Button variant="warning">Back to full list</Button>
				</Link>
			</div>
		</Alert>
	);
};

export default Error;
