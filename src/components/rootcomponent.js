import React from 'react';
import {Home} from './imagecontainer';
import {Login} from './login'; 
import {Logout} from './logout';
import {Navbar} from './navbar';
import {Register} from './register';
import {About} from './about';
import {Notfound} from './notfound';
import {Footer} from './footer';
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

