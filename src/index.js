import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { func } from 'prop-types';
import axios from 'axios';
// CSS
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Navbar from 'react-bootstrap/Navbar';

import Character from './character';
import Person from './person';
import Error from './error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Mainpage() {
	const url = 'https://www.breakingbadapi.com/api/characters';
	const quoteUrl = 'https://www.breakingbadapi.com/api/quotes/';
	const [ users, setUsers ] = useState([]);
	const [ quotes, setQuote ] = useState([]);
	const getUsers = async () => {
		const response = await Axios(url);
		const quoteResp = await Axios(quoteUrl);
		setQuote(quoteResp.data);
		setUsers(response.data);
	};
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<Router>
			<Navbar sticky="top" variant="dark" bg="warning">
				<Container>
					<Navbar.Brand>
						<img
							alt=""
							src="https://logoeps.com/wp-content/uploads/2012/10/breaking-bad-logo-vector.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{' '}
						<strong> Breaking bad</strong>
					</Navbar.Brand>
				</Container>
			</Navbar>
			<Switch>
				<Route exact path="/">
					<Container style={{ backgroundColor: '#3E2723' }} fluid>
						<Row fluid>
							{users.map((user) => {
								return <Character user={user} />;
							})}
						</Row>
					</Container>
				</Route>
				<Route path="/person/:name" children={<Person />} />
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

ReactDOM.render(<Mainpage />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
