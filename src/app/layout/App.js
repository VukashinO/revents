import React, { Fragment } from 'react';
import EventDashboard from '../../features/event/eventDashoard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';

const App = () => {
	return (
		<Fragment>
			<NavBar />
			<Container className='main'>
				<EventDashboard />
			</Container>
		</Fragment>
	);
};

export default App;
