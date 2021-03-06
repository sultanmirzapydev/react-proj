import React from 'react';
import {Home} from './pages/imagecontainer';
import {Login} from './pages/login'; 
import {Logout} from './pages/logout';
import {Navbar} from './utils/navbar';
import {Register} from './pages/register';
import {About} from './pages/about';
import {Notfound} from './utils/notfound';
import {Footer} from './utils/footer';
import {Cart} from './pages/cart';
import {ImageDetails} from './pages/imagedetails';
import {CheckOut} from './pages/checkout';
import {BrowserRouter as Router,Switch,Route,Link, useHistory} from "react-router-dom";
import SingleImage from './pages/singleimage';

export const RootComponent = () => {
	const history = useHistory()
	return (
		<>	
	<Router>
		<Navbar/>
	<Switch>

		<Route exact path='/' component = {Home} />
		<Route path='/cart' component = {Cart} />
		<Route path='/checkout' component = {CheckOut}/>
		<Route  path='/images/:id' > <ImageDetails/>  </Route > 

		<Route path ='/about' component ={About}/>
		<Route path ='/login' component = {Login} />
		<Route path = '/register' component = {Register}/>
		<Route path="*" component={Notfound} />

	</Switch>
	<Footer/>
	</Router>
		</>
		)
};

