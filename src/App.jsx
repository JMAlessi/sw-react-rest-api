import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import './App.scss';

function App() {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [starships, setStarships] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData(url, setState) {
			const response = await fetch(url);
			const data = await response.json();
			setState(data.results);
		}

		const fetchPeople = async () => {
			await fetchData('https://swapi.dev/api/people/?format=json', setPeople);
		};

		const fetchPlanets = async () => {
			await fetchData('https://swapi.dev/api/planets/?format=json', setPlanets);
		};

		const fetchStarships = async () => {
			await fetchData(
				'https://swapi.dev/api/starships/?format=json',
				setStarships
			);
		};

		Promise.all([fetchPeople(), fetchPlanets(), fetchStarships()])
			.then(() => setLoading(false))
			.catch((error) => console.error(error));
	}, []);

	const renderLoader = () => {
		return (
			<Dimmer
				active
				inverted
			>
				<Loader inverted>Loading...</Loader>
			</Dimmer>
		);
	};

	const renderContent = () => {
		return (
			<Switch>
				<Route
					exact
					path="/"
				>
					<Home />
				</Route>
				<Route
					exact
					path="/people"
				>
					<People data={people} />
				</Route>
				<Route
					exact
					path="/planets"
				>
					<Planets data={planets} />
				</Route>
				<Route
					exact
					path="/starships"
				>
					<Starships data={starships} />
				</Route>
			</Switch>
		);
	};

	return (
		<BrowserRouter>
			<>
				<Navbar />
				<Container>{loading ? renderLoader() : renderContent()}</Container>
			</>
		</BrowserRouter>
	);
}

export default App;
