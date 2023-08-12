import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import links from '../utils/url.json'
import axios from 'axios'
import {
  UPDATE_SEARCH,
  LOADING_SUCCESS,
  LOADING_ERROR,
  LOADING_BEGIN,
  SHOW_DRINKS,
} from '../utils/types'

const initialState = {
  search: '',
  cocktailList: [],
  loading: false,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateSearch = (search) => {
    dispatch({ type: UPDATE_SEARCH, payload: search })
  }

  const fetchData = async (search = 'margarita') => {
    dispatch({ type: LOADING_BEGIN })
    try {
      const drinks = await axios({
        method: 'get',
        url: `${links.linkSearch}${search}`,
      })

      dispatch({ type: LOADING_SUCCESS })
      dispatch({ type: SHOW_DRINKS, payload: drinks.data })
    } catch (error) {
      dispatch({ type: LOADING_ERROR, payload: error.message })
    }
  }

  useEffect(() => {
    fetchData(state.search)
  }, [state.search])

  return (
    <AppContext.Provider value={{ ...state, updateSearch }}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook
const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
