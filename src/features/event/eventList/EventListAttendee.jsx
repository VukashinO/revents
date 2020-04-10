import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
	render() {
		const { atendee } = this.props;
		return (
			<List.Item>
				<Image as='a' size='mini' circular src={atendee.photoURL} />
			</List.Item>
		);
	}
}
export default EventListAttendee;
