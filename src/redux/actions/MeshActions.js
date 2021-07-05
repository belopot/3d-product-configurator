import {SET_SELECTED_MESH_DATA} from "../StoreConstants"

export function setSelectedMeshData(data) {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_MESH_DATA,
      payload: data
    })
  }
}
