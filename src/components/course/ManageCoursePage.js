/**
 * Created by Ibrahim on 18/03/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';


export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <h1>Manage Course</h1>
    );
  }
}

ManageCoursePage.propTypes = {};


function mapStateToProps(state, ownProps) {

  return {
    state: state

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
