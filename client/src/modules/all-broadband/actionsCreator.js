import actionTypes from './actionTypes'
import {  
  Result,
  GetAllBroadbandListSuccess
} from './models'

export const actionsCreator =  {

  getAllBroadbandListRequest : () => {
    return {
      type: actionTypes.ALL_BROADBAND_LIST_REQUEST,
      payload: null
    }
  },

  getAllBroadbandListSuccess : (result: GetAllBroadbandListSuccess) => {
    return {
      type: actionTypes.ALL_BROADBAND_LIST_SUCCESS,
      payload: result
    }
  },  

  getAllBroadbandListFailure : (result: Result) => {
    return {
      type: actionTypes.ALL_BROADBAND_LIST_FAILURE,
      payload: result
    }
  },   

}

