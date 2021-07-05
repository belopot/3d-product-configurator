import {SET_CURRENT_NODE_DATA} from "../StoreConstants"

const initialState = {
  currentNodeData: null
}

const NodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_NODE_DATA:
      return {
        ...state,
        currentNodeData: action.payload
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default NodeReducer
