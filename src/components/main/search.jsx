import React from 'react';
import SearchBar from "../search/search_bar.jsx";

class Search extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
	const searchBarGridSizes = "col-md-4 col-sm-5 col-xs-12";
    return (
      <div className="search container">
		<SearchBar gridSizes={ searchBarGridSizes } startLoading={ this.props.startLoading } />
      </div>
    );
  }
}

export default Search;