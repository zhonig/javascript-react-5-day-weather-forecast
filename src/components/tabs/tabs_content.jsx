import React from 'react';
import ForecastIndex from '../forecast/forecast_index.jsx';
import FiveDayForecast from '../charts/five_day_forecast_line_graph.jsx';

class TabsContent extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="tab-content">
        <div className="tab-pane active" id="forecast">
          <ForecastIndex forecast={ this.props.forecast } />
        </div>
        <div className="tab-pane" id="forecast_viz">
          <FiveDayForecast forecast={ this.props.forecast } />
        </div>
      </div>
    );
  }
}

export default TabsContent;