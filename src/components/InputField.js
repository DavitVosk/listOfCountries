import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import countries from '../reducers/countries';

class InputField extends Component {
	handleFilterList (event) {
		var updatedList = countries;
		updatedList = updatedList.filter((item) => {
			console.log( 'name', item.name );
			return item.name.toLowerCase().search(
					event.target.value.toLowerCase()) !== - 1;
		});

		this.props.SearchCountry(updatedList);
	}

	render () {
		return (
			<div className="input-field">
				<input
					onChange={this.handleFilterList.bind(this) }
					placeholder="Filter..."
					size="35"
				/>
			</div>
		)
	}
}

export default connect(null, actions)(InputField);