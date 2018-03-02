import actionTypes from './actionTypes'

import  { initialState } from './initialState'
import {  
  AllBroadbandState,
  GetAllBroadbandListSuccess  
} from './models'

export const reducer = (state: AllBroadbandState = initialState , action) => {

  switch (action.type) {
    case actionTypes.ALL_BROADBAND_LIST_SUCCESS:
      {
        const result : GetAllBroadbandListSuccess = action.payload;
        const newState : AllBroadbandState = {...state};

        newState.combos = result.combos;

        return newState;
      }                 
    default:
      return state;
  }
}