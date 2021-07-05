import {
  CURRENT_DRACO_VERSION,
  GET_CURRENT_PRODUCT_DATA,
  GET_PRODUCT_DATA_LIST,
  SET_CURRENT_PRODUCT_DATA
} from "../StoreConstants"

export function getCurrentProductData(path) {
  return dispatch => {
    if (path) {
      fetch(path)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: GET_CURRENT_PRODUCT_DATA,
            payload: data
          })
        })
    } else {
      dispatch({
        type: GET_CURRENT_PRODUCT_DATA,
        payload: null
      })
    }
  }
}

export function getProductDataList() {
  return dispatch => {
    fetch("/products/products.json")
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_PRODUCT_DATA_LIST,
          payload: data
        })
      })
  }
}

export function setCurrentProductData(data) {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_PRODUCT_DATA,
      payload: data
    })
  }
}

export function setCurrentDracoVersion(data) {
  return dispatch => {
    dispatch({
      type: CURRENT_DRACO_VERSION,
      payload: data
    })
  }
}
