import store from '../store';

import {
    GET_PLACES,
    GET_PLACE,
    PLACE_ERROR,
    UPDATE_PLACE,
    DELETE_PLACE,
    GET_VPLACES,
    ADD_PLACE,
    baseURL
} from './types';

// Get posts


// export const getplaces = () => async dispatch => {
//   try {
//     // const res = await axios.post();
//     dispatch({
//       type: GET_PLACES,
//       // payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PLACE_ERROR,
//       // payload: { status: err.response.status }
//     });
//   }
// };




export const addplace = (data) => async dispatch => {
  try {
      
    dispatch({
      type: ADD_PLACE,
      payload : data
    });

  } catch (err) {
    dispatch({
      type: PLACE_ERROR,
      payload: data
    });
  }
};

