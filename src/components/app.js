import React, { Component } from 'react';
import Header from './Header';
import InputField from './InputField';
import CountryList from './CountryList';

export default class App extends Component {
	render () {
		return (
			<div className="app">
				<Header />
				<InputField />
				<CountryList />
			</div>
		);
	}
}
