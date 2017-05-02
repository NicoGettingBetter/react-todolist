import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lists from './containers/Lists';
import Filter from './containers/Filter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React TODO List</h2>
        </div>
        <Filter />
        <Lists lists={this.props.lists} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
};

export default connect(mapStateToProps)(App);
