import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Dashboard/Customer/Order/Order';
import Review from './components/Dashboard/Customer/Review/Review';
import Service from './components/Dashboard/Customer/Service/Service';
import AddService from './components/Dashboard/Admin/AddService/AddService';
import AllData from './components/Dashboard/Admin/AllData/AllData';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route path='/login'>
						<Login></Login>
					</Route>
					<PrivateRoute path='/customer/order/:serviceId'>
						<Order></Order>
					</PrivateRoute>
					<PrivateRoute path='/customer/service'>
						<Service></Service>
					</PrivateRoute>
					<PrivateRoute path='/customer/review'>
						<Review></Review>
					</PrivateRoute>
					<PrivateRoute path='/admin/addService'>
						<AddService></AddService>
					</PrivateRoute>
					<PrivateRoute path='/admin/allData'>
						<AllData></AllData>
					</PrivateRoute>
					<PrivateRoute path='/admin/makeAdmin'>
						<MakeAdmin></MakeAdmin>
					</PrivateRoute>
					<Route path='*'>
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
