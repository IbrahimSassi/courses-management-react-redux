/**
 * Created by Ibrahim on 18/03/2017.
 */

import * as types from './actionsTypes';
export function createCourse(course) {
  return {type: types.CREATE_COURSE, course};
}
