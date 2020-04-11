import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
	state = {
		title: '',
		date: '',
		city: '',
		venue: '',
		hostedBy: '',
	};

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
			this.props.handleUpdateEvent(this.state);
		} else {
			this.props.handleSubmit(this.state);
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
					<Button onClick={this.props.handleCreateEvent} type='button'>
						Cancel
					</Button>
				</Form>
			</Segment>
		);
	}
}

export default EventForm;
