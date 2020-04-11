import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { incrementCounter, decrementCounter } from './testActions';

class TestComponent extends Component {
	render() {
		const { incrementCounter, decrementCounter } = this.props;
		return (
			<div>
				<h1>{this.props.test}</h1>
				<Button
					onClick={() => incrementCounter()}
					positive
					content='Increment'
				/>
				<Button
					onClick={() => decrementCounter()}
					negative
					content='Decrement'
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({ test: state.test.data });

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(
	TestComponent
);
