import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cocktail = ({ drink }) => {
  const navigate = useNavigate()

  return (
    <div key={drink.idDrink} className='cocktail__container'>
      <img src={drink.strDrinkThumb} alt='img' />
      <h1>{drink.strDrink}</h1>
      <h2>{drink.strGlass}</h2>
      <p>{drink.strAlcoholic}</p>
      <button onClick={() => navigate(`/cocktail/${drink.idDrink}`)}>
        Details
      </button>
    </div>
  )
}

export default Cocktail
