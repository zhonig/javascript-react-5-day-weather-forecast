import React from 'react';

class Welcome extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
	return (
      <div className="welcome container">
		  <div className="jumbotron">
			<h1>Welcome to Zack's 5-Day Weather Forecast Web Page!</h1>
			<p>
				<span>To get started,</span>
				<strong>search for a city, zip, or place below.</strong>
				<span>&nbsp;Click on the button below</span>
				<strong>to get your current location's weather.</strong>
			</p>
			<p>
				<button className="btn btn-primary btn-lg" disabled={ this.props.loading } onClick={ this.props.getCurrentPosition }>Get your current location's weather!</button>
			</p>
		  </div>
      </div>
    );
  }
}

export default Welcome;