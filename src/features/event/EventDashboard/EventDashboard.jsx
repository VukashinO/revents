import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { createEvent, deleteEvent, updateEvent } from '../eventActions';

class EventDashboard extends Component {

	handleDeleteEvent = (id) => {
		// this.setState(({ events }) => ({
		// 	events: events.filter((evt) => evt.id !== id),
		// }));
		this.props.deleteEvent(id);
	};

	render() {
		const { events } = this.props;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList events={events} deleteEvent={this.handleDeleteEvent} />
				</Grid.Column>
				<Grid.Column width={6}>
					<h2>Activity Feed</h2>
				</Grid.Column>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({ events: state.events });
export default connect(mapStateToProps, {
	createEvent,
	updateEvent,
	deleteEvent,
})(EventDashboard);
