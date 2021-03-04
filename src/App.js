import './App.scss';
import {PublicRoute} from './router/PublicRoute/PublicRoute'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import HousesListPage from './pages/HousesListPage/HousesListPage'
import HousePage from './pages/HousePage/HousePage'
import AddHousePage from './pages/AddHousePage/AddHousePage'

function App() {
    return (
        <div className="container">
            <Router basename={`/`}>
				<Switch>
					<PublicRoute exact path={`/`} component={HomePage} layout={MainLayout}></PublicRoute>
					<PublicRoute path={`/houses-list`} component={HousesListPage} layout={MainLayout}></PublicRoute>
					<PublicRoute path={`/house`} component={HousePage} layout={MainLayout}></PublicRoute>
					<PublicRoute path={`/add-house`} component={AddHousePage} layout={MainLayout}></PublicRoute>
				</Switch>
			</Router>
        </div>
    )
}

export default App;
