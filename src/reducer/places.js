
import {
  GET_PLACES,
  GET_PLACE,
  PLACE_ERROR,
  UPDATE_PLACE,
  DELETE_PLACE,
  
  ADD_PLACE
} from '../action/types';
  
  const initialState = {
    places: [],
   
    place: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PLACES:
        return {
          ...state,
          places: payload,
          loading: false
        };
      
    
      case ADD_PLACE:
        return {
          ...state,
          // [payload, ...state.places]
           places:[payload, ...state.places] ,
          loading: false
        };
      case DELETE_PLACE:
        return {
          // ...state,
          ...state,
           places: payload,
           loading: false
        };
      case PLACE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
    
   
      default:
        return state;
    }
  }
  