import {DRACO_VERSION_LIST} from "../../constants"
import {
  CURRENT_DRACO_VERSION,
  GET_CURRENT_PRODUCT_DATA,
  GET_PRODUCT_DATA_LIST,
  SET_CURRENT_PRODUCT_DATA
} from "../StoreConstants"

const initialState = {
  productDataList: [],
  currentProductData: null,
  productData: null,
  currentDracoVersion: DRACO_VERSION_LIST[0].id
}

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload
      }
    case GET_PRODUCT_DATA_LIST:
      return {
        ...state,
        productDataList: [...action.payload]
      }
    case SET_CURRENT_PRODUCT_DATA:
      return {
        ...state,
        currentProductData: action.payload
      }
    case CURRENT_DRACO_VERSION:
      return {
        ...state,
        currentDracoVersion: action.payload
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default ProductReducer
