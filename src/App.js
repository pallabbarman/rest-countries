import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import SingleCountry from './components/SingleCountry/SingleCountry';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Country />
                </Route>
                <Route path="/country/:name/">
                    <SingleCountry />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
