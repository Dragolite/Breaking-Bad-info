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
import { Link } from 'react-router-dom';

const Character = (props) => {
	return (
		<Col className="mb-2 mt-2">
			<Card border="warning" style={{ margin: 'auto', width: '18rem', height: '100%' }}>
				<Card.Img style={{ width: '100%', height: '400px' }} variant="top" src={props.user.img} />
				<Card.Body>
					<Card.Title>{props.user.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{props.user.nickname}</Card.Subtitle>
					<Card.Text>
						<div>
							<strong>Date of birth: </strong>
							{props.user.birthday}
						</div>
						<div>
							<strong>status: </strong>
							{props.user.status}
						</div>
					</Card.Text>
					<Card.Header>Occupation</Card.Header>
					<ListGroup variant="flush">
						{props.user.occupation.map((i) => {
							return <ListGroup.Item>{i}</ListGroup.Item>;
						})}
					</ListGroup>
				</Card.Body>
				<Card.Footer>
					<Link to={`/person/${props.user.name}`}>
						<Button variant="warning">More details...</Button>
					</Link>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default Character;
