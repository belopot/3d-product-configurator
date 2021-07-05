import {SET_SELECTED_MESH_DATA} from "../StoreConstants"

const initialState = {
  selectedMeshData: []
}

const MeshReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_MESH_DATA:
      return {
        ...state,
        selectedMeshData: [...action.payload]
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default MeshReducer
