import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home.js';
import People from './components/People.js';
import Planets from './components/Planets.js';
import Starships from './components/Starships.js';

function App() {
    const [people, setPeople] = useState([])
    const [planets, setPlanets] = useState([])
    const [starships, setStarships] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch('https://swapi.co/api/people/?format=json')
            let data = await res.json()
            setLoading(false)
            setPeople(data.results)
        }

        async function fetchPlanets() {
            let res = await fetch ('https://swapi.co/api/planets/?format=json')
            let data = await res.json()
            setLoading(false)
            setPlanets(data.results)
        }

        async function fetchStarships() {
            let res = await fetch ('https://swapi.co/api/starships/?format=json')
            let data = await res.json()
            setLoading(false)
            setStarships(data.results)
        }

        fetchPeople()
        fetchPlanets()
        fetchStarships()
    }, [])

    return (
        <>
            <Router>
                <Navbar />
                <Container>
                    {loading ? (
                        <Dimmer active inverted>
                            <Loader inverted>One moment please...</Loader>
                        </Dimmer>
                    ) : (
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='/people.js'>
                                <People data={people} />
                            </Route>
                            <Route exact path='/planets.js'>
                                <Planets data={planets} />
                            </Route>
                            <Route exact path='/starships.js'>
                                <Starships data={starships} />
                            </Route>
                        </Switch>
                    )}
                </Container>
            </Router>
        </>
    )
};

export default App;