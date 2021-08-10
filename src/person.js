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
import { Link, useParams } from 'react-router-dom';

const Person = (props) => {
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

	const data = useParams().name;
	var userdata = {};
	const quotedata = {};
	{
		users.map((user) => {
			if (user.name === data) {
				userdata = user;
			}
		});
	}
	return (
		<Container style={{ backgroundColor: '#3E2723' }} fluid>
			<Row fluid>
				<Col className="mb-2 mt-2">
					<Card border="warning" style={{ margin: 'auto', width: '18rem' }}>
						<Card.Img style={{ width: '100%', height: '400px' }} variant="top" src={userdata.img} />
						<Card.Body>
							<Card.Title>{userdata.name}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">{userdata.nickname}</Card.Subtitle>
							<Card.Text>
								<div>
									<strong>Date of birth: </strong>
									{userdata.birthday}
								</div>
								<div>
									<strong>status: </strong>
									{userdata.status}
								</div>
								<div>
									<strong>portrayed by: </strong>
									{userdata.portrayed}
								</div>
								<div>
									<strong>appearance in season: </strong>
									{userdata.appearance}
								</div>
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Link to="/">
								<Button variant="warning">Back to full list</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>

				{/* quotes */}

				<Col className="mb-2 mt-2">
					<Card border="warning" style={{ margin: 'auto', width: '100%' }}>
						<Card.Body>
							<Card.Title>Famous Quotes</Card.Title>
							<ListGroup variant="flush">
								{quotes.map((q) => {
									if (q.author === data) {
										return (
											<ListGroup.Item>
												<blockquote className="blockquote mb-0">
													<p>{q.quote}</p>
													<footer className="blockquote-footer">
														<cite title="Source Title">{q.author}</cite>
													</footer>
												</blockquote>
											</ListGroup.Item>
										);
									}
								})}
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Person;
