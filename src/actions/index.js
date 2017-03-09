import {SEARCH_COUNTRY} from './type';

export const  SearchCountry = (countryList) => {
	return {
		type:SEARCH_COUNTRY,
		countryList
	}
}