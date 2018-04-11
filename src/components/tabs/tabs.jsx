import React from 'react';

class Tabs extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
        <ul className="options nav nav-pills">
          <li className="active">
            <a href="#forecast" data-toggle="tab">Forecast</a>
          </li>
          <li>
            <a href="#forecast_viz" data-toggle="tab">Graph Visualization</a>
          </li>
        </ul>
    );
  }
}

export default Tabs;