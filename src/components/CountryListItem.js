import React,{ Component } from 'react';

class CountryListItem extends Component{

  render(){
    return (
    	<div>
			{this.props.country.name}
		</div>
    )
  }
}

export default CountryListItem;

