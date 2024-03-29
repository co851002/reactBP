import React, { Component } from "react";
import { connect } from 'react-redux';
import { testAction } from '../actions/index.js';

/**
 * export the dashboard page
 */
class Dashboard extends Component {

  /**
   * call the test action that we created
   */
  handleClickHello() {
    this.props.testAction();
  }

  /**
   * render component to the screen
   * @returns { ReactElement }
   */
  render() {
    return (
      <div>
        <h4>This is the dashboard</h4>
        <a onClick={this.handleClickHello.bind(this)}>Knock Knock</a>
        <h3>{this.props.auth.message}</h3>
        <img src={require("../assets/img/test.png")} />
      </div>
    );
  }
}

/**
 * allows us to call our application state from props
 */
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

/**
 * exports our component and gives it access to the redux state
 */
export default connect(mapStateToProps, { testAction })(Dashboard);
