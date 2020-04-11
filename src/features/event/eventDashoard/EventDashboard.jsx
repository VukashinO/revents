import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';
import cuid from 'cuid';

const eventsFromDashboard = [
	{
		id: '1',
		title: 'Trip to Tower of London',
		date: '2018-03-27',
		category: 'culture',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
		city: 'London, UK',
		venue: "Tower of London, St Katharine's & Wapping, London",
		hostedBy: 'Bob',
		hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
		attendees: [
			{
				id: 'a',
				name: 'Bob',
				photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
			},
			{
				id: 'b',
				name: 'Tom',
				photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
			},
		],
	},
	{
		id: '2',
		title: 'Trip to Punch and Judy Pub',
		date: '2018-03-28',
		category: 'drinks',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
		city: 'London, UK',
		venue: 'Punch & Judy, Henrietta Street, London, UK',
		hostedBy: 'Tom',
		hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
		attendees: [
			{
				id: 'b',
				name: 'Tom',
				photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
			},
			{
				id: 'a',
				name: 'Bob',
				photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
			},
		],
	},
];

class EventDashboard extends Component {
	state = {
		events: eventsFromDashboard,
		isOpen: false,
		selectedEvent: null,
	};

	handleCreateEvent = () => {
		this.setState((prevState) => ({
			isOpen: true,
			selectedEvent: null,
		}));
	};

	handleSubmit = (user) => {
		user.id = cuid();
		user.hostPhotoURL = '/assets/user.png';
		this.setState((prevState) => ({
			events: [...prevState.events, user],
			isOpen: false,
		}));
	};

	handleSelectEvent = (selectedEvent) => {
		this.setState({ selectedEvent, isOpen: true });
	};

	handleUpdateEvent = (updatedEvent) => {
		this.setState(({ events }) => ({
			events: events.map((event) => {
				if (event.id === updatedEvent.id) {
					return {
						...updatedEvent,
					};
				} else {
					return event;
				}
			}),
			isOpen: false,
			selectedEvent: null,
		}));
	};

	handleDeleteEvent = (id) => {
		this.setState(({ events }) => ({
			events: events.filter((evt) => evt.id !== id),
		}));
	};

	render() {
		const { events, isOpen } = this.state;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList
						events={events}
						handleSelectEvent={this.handleSelectEvent}
						deleteEvent={this.handleDeleteEvent}
					/>
				</Grid.Column>
				<Grid.Column width={6}>
					<Button
						onClick={this.handleCreateEvent}
						positive
						content='Create Event'
					/>
					{isOpen && (
						<EventForm
							key={this.state.selectedEvent ? this.state.selectedEvent.id : 0}
							handleCreateEvent={this.handleCreateEvent}
							handleSubmit={this.handleSubmit}
							selectedEvent={this.state.selectedEvent}
							handleUpdateEvent={this.handleUpdateEvent}
						/>
					)}
				</Grid.Column>
			</Grid>
		);
	}
}

export default EventDashboard;
