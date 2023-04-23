import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import './App.scss';

// Single Responsibility Principle
// FetchData class is responsible for making API calls and handling errors
class FetchData {
	async fetchData(url) {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data.results;
	}
}

function App() {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [starships, setStarships] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = new FetchData();

		// Open-Closed Principle
		// fetchResources is a reusable function that can be extended with new resources
		async function fetchResources(resources, setResources) {
			try {
				const results = await fetchData.fetchData(
					`https://swapi.dev/api/${resources}/?format=json`
				);
				setResources(results);
			} catch (error) {
				console.error(error);
			}
		}

		const fetchAllResources = async () => {
			await Promise.all([
				fetchResources('people', setPeople),
				fetchResources('planets', setPlanets),
				fetchResources('starships', setStarships),
			]);
			setLoading(false);
		};

		fetchAllResources();
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
			<BrowserRouter>
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
			</BrowserRouter>
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
