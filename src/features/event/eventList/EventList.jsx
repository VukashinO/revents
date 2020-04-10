import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
	render() {
		return (
			<Fragment>
				{this.props.events.map((event) => (
					<EventListItem
						key={event.id}
						event={event}
						handleCreateEvent={this.props.handleCreateEvent}
					/>
				))}
			</Fragment>
		);
	}
}
export default EventList;
