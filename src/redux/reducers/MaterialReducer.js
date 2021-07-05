import {
  SELECTED_MESH_MATERIAL,
  SET_CURRENT_MATERIAL_DATA
} from "../StoreConstants"

const initialState = {
  currentMaterialData: null,
  selectedMeshMaterial: null
}

const MaterialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MATERIAL_DATA:
      return {
        ...state,
        currentMaterialData: action.payload
      }
    case SELECTED_MESH_MATERIAL:
      return {
        ...state,
        selectedMeshMaterial: action.payload
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default MaterialReducer
