import {SET_CURRENT_NODE_DATA} from "../StoreConstants"

export function setCurrentNodeData(data) {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_NODE_DATA,
      payload: data
    })
  }
}
