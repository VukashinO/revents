import React, { Fragment } from 'react';
import EventDashboard from '../../features/Event/EventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/Home/HomePage';
import PeopleDashboard from '../../features/User/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/User/UserDetailed/UserDetailedPage';
import EventDetailedPage from '../../features/Event/EventDetailed/EventDetailedPage';
import SettingsDasboard from '../../features/User/Settings/SettingsDasboard';
import NavBar from '../../features/Nav/NavBar/NavBar';
import EventForm from '../../features/Event/EventForm/EventForm';

const App = () => {
	return (
		<Fragment>
			<Route exact path='/' component={HomePage} />
			<Route
				path='/(.+)'
				render={() => (
					<Fragment>
						<NavBar />
						<Container className='main'>
							<Route path='/events' component={EventDashboard} />
							<Route path='/events/:id' component={EventDetailedPage} />
							<Route path='/people' component={PeopleDashboard} />
							<Route path='/profile/:id' component={UserDetailedPage} />
							<Route path='/settings' component={SettingsDasboard} />
							<Route path='/createEvent' component={EventForm} />
						</Container>
					</Fragment>
				)}
			/>
		</Fragment>
	);
};

export default App;
