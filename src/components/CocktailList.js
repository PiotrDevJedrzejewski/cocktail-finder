import React from 'react'
import Cocktail from './Cocktail'
import { useAppContext } from '../context/context'

const CocktailList = () => {
  const { cocktailList, loading } = useAppContext()

  if (loading) {
    return
  }

  if (cocktailList === null) {
    return <div className='cocktail__nothing'>0 Drinks with this name</div>
  }

  return (
    <div className='cocktail'>
      {cocktailList.map((drink) => (
        <Cocktail drink={drink} key={drink.idDrink} />
      ))}
    </div>
  )
}

export default CocktailList
