import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';

class EventForm extends Component {
	state = { ...this.props.event };

	componentDidMount() {
		if (this.props.selectedEvent) {
			this.setState({
				...this.props.selectedEvent,
			});
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.id) {
			this.props.updateEvent(this.state);
			this.props.history.push(`/events/${this.state.id}`)
		} else {
			const newEvent = {
				...this.state,
				id: cuid(),
				hostPhotoURL: '/assets/user.png',
			};
			this.props.createEvent(newEvent);
			this.props.history.push(`/events`);
		}
	};

	handleInput = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<Segment>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>Event Title</label>
						<input
							placeholder='First Name'
							name='title'
							value={this.state.title}
							onChange={this.handleInput}
						/>
					</Form.Field>
					<Form.Field>
						<label>Event Date</label>
						<input
							type='date'
							placeholder='Event Date'
							name='date'
							value={this.state.date}
							onChange={this.handleInput}
						/>
					</Form.Field>
					<Form.Field>
						<label>City</label>
						<input
							placeholder='City event is taking place'
							name='city'
							value={this.state.city}
							onChange={this.handleInput}
						/>
					</Form.Field>
					<Form.Field>
						<label>Venue</label>
						<input
							placeholder='Enter the Venue of the event'
							name='venue'
							value={this.state.venue}
							onChange={this.handleInput}
						/>
					</Form.Field>
					<Form.Field>
						<label>Hosted By</label>
						<input
							placeholder='Enter the name of person hosting'
							name='hostedBy'
							value={this.state.hostedBy}
							onChange={this.handleInput}
						/>
					</Form.Field>
					<Button positive type='submit'>
						Submit
					</Button>
					<Button onClick={this.props.history.goBack} type='button'>
						Cancel
					</Button>
				</Form>
			</Segment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const eventId = ownProps.match.params.id;
	let event = {
		title: '',
		date: '',
		city: '',
		venue: '',
		hostedBy: '',
	};
	if (eventId && state.events.length > 0) {
		event = state.events.filter((event) => event.id === eventId)[0];
	}
	return {
		event,
	};
};

export default connect(mapStateToProps, {
	updateEvent,
	createEvent,
})(EventForm);
