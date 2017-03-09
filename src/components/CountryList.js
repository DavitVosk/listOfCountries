import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryListItem from './CountryListItem';

class CountryList extends Component {
	renderList () {
		const { countries } = this.props;

		return countries.map((country, id) => (
			<li key={id} className="list-group-item">
				<CountryListItem country={country}/>
			</li>
		))
	}

	render () {
		return (
			<ul className="col-md-4 list-group">
				{this.renderList()}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
	return { countries: state.countries }
};

export default connect(mapStateToProps)(CountryList);
