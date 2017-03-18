/**
 * Created by Ibrahim on 18/03/2017.
 */
import * as types from './actionsTypes';
import CourseApi from '../api/mockCourseApi';


export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}


export function loadCourses() {
  return function (dispatch) {
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
