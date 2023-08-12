import React, { useState, useMemo } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useAppContext } from '../context/context'

const SearchForm = () => {
  const { updateSearch, search } = useAppContext()

  const [localValue, setLocalValue] = useState('')

  const debounce = () => {
    let timeoutID
    return (e) => {
      setLocalValue(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        updateSearch(e.target.value)
      }, 1500)
    }
  }
  const optimizedDebounce = useMemo(() => debounce(), [])

  return (
    <div className='search'>
      <form className='search__form'>
        <input
          type='text'
          placeholder='Margarita etc.'
          className='search__input'
          name='name'
          id='name'
          value={localValue}
          onChange={optimizedDebounce}
        />
        <label htmlFor='name'>
          <BsSearch className='search__icon' />
        </label>
      </form>
    </div>
  )
}

export default SearchForm
