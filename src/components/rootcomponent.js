import React from 'react';
import {Home} from './pages/imagecontainer';
import {Login} from './pages/login'; 
import {Logout} from './pages/logout';
import {Navbar} from './utils/navbar';
import {Register} from './pages/register';
import {About} from './pages/about';
import {Notfound} from './utils/notfound';
import {Footer} from './utils/footer';
import {BrowserRouter as Router,Switch,Route,Link, useHistory} from "react-router-dom";
	
export const RootComponent = () => {
	const history = useHistory()
	return (
		<>	
	<Router>
		<Navbar/>
	<Switch>
		<Route exact path='/' component = {Home} />
		<Route path ='/about' component ={About}/>
		<Route path ='/login' component = {Login} />
		<Route path = '/register' component = {Register}/>
		<Route path="*" component={Notfound} />
	</Switch>
	
	</Router>
		</>
		)
};

