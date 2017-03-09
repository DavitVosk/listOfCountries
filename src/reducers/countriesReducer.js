import countries from './countries';
import { SEARCH_COUNTRY } from '../actions/type';

export default (state = countries, action) => {
	switch (action.type) {
		case SEARCH_COUNTRY:
			return action.countryList
	}
	return state;
};