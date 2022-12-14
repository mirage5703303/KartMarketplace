import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_DASH
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false,
  dashdata: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DASH: 
      return {
        ...state,
        dashdata: action.payload
      }
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
