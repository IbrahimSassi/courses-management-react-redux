/**
 * Created by Ibrahim on 18/03/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseForm from './CourseForm';

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({},props.initialCourse),
      errors: {}
    };


  }

  render() {
    return (
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          allAuthors={[]}
        />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  return {
    course: course

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
