import {createStore, applyMiddleware} from "redux"
import {persistStore, persistReducer} from "redux-persist"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import RootReducer from "./reducers/RootReducer"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["root"]
}

const persistedReducer = persistReducer(persistConfig, RootReducer)
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
const persistor = persistStore(store)

export {persistor, store}
