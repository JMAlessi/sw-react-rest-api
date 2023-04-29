import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
		async function fetchData(resource, setData) {
			try {
				const response = await fetch(`/api/${resource}`);
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.error(error);
			}
		}

		const fetchAllResources = async () => {
			await Promise.all([
				fetchData('people', setPeople),
				fetchData('planets', setPlanets),
				fetchData('starships', setStarships),
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
