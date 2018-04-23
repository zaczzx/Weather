import React from 'react';
import { connect } from 'redux';

class WeatherList extends React.Component {
  render() {
    return (
      <table className="table table-hover">
        <thread>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thread>
        <tbody>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
