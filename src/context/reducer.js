import {
  LOADING_BEGIN,
  LOADING_ERROR,
  LOADING_SUCCESS,
  UPDATE_SEARCH,
  SHOW_DRINKS,
} from '../utils/types'

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload,
      }
    case LOADING_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case LOADING_ERROR:
      console.error(action.payload)
      return {
        ...state,
        loading: false,
      }
    case SHOW_DRINKS:
      return {
        ...state,
        cocktailList: action.payload.drinks,
      }

    default:
      return {
        ...state,
      }
  }
}

export default reducer
