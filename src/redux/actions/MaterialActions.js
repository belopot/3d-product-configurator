import {
  SELECTED_MESH_MATERIAL,
  SET_CURRENT_MATERIAL_DATA
} from "../StoreConstants"

export function setCurrentMaterialData(path) {
  return dispatch => {
    if (path) {
      fetch(path)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: SET_CURRENT_MATERIAL_DATA,
            payload: data
          })
        })
    } else {
      dispatch({
        type: SET_CURRENT_MATERIAL_DATA,
        payload: null
      })
    }
  }
}

export function setSelectedMeshMaterial(data) {
  return dispatch => {
    dispatch({
      type: SELECTED_MESH_MATERIAL,
      payload: data
    })
  }
}
