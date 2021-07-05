import {combineReducers} from "redux"
import MaterialReducer from "./MaterialReducer"
import MeshReducer from "./MeshReducer"
import NodeReducer from "./NodeReducer"
import ProductReducer from "./ProductReducer"

const RootReducer = combineReducers({
  productStore: ProductReducer,
  nodeStore: NodeReducer,
  meshStore: MeshReducer,
  materialStore: MaterialReducer
})

export default RootReducer
