import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/context'
const SingleCocktail = () => {
  const { id } = useParams()
  const { cocktailList } = useAppContext()

  const drink = cocktailList.filter((drink) => {
    return drink.idDrink === id
  })

  const newDrink = drink[0]

  return (
    <div className='info'>
      <img src={newDrink.strDrinkThumb} alt='img' className='info__img' />
      <div className='info__text'>
        <p>
          <span>Name: </span>
          {newDrink.strDrink}
        </p>
        <p>
          <span>Category: </span> {newDrink.strCategory}
        </p>
        <p>
          <span>Type: </span>
          {newDrink.strAlcoholic}
        </p>
        <p>
          <span>Glass: </span>
          {newDrink.strGlass}
        </p>
        <div className='info__ingredient'>
          <h1>Ingredient</h1>
          <p>{newDrink.strIngredient1 ? newDrink.strIngredient1 : ''}</p>
          <p>{newDrink.strIngredient2 ? newDrink.strIngredient2 : ''}</p>
          <p>{newDrink.strIngredient3 ? newDrink.strIngredient3 : ''}</p>
          <p>{newDrink.strIngredient4 ? newDrink.strIngredient4 : ''}</p>
          <p>{newDrink.strIngredient5 ? newDrink.strIngredient5 : ''}</p>
          <p>{newDrink.strIngredient6 ? newDrink.strIngredient6 : ''}</p>
          <p>{newDrink.strIngredient7 ? newDrink.strIngredient7 : ''}</p>
          <p>{newDrink.strIngredient8 ? newDrink.strIngredient8 : ''}</p>
          <p>{newDrink.strIngredient9 ? newDrink.strIngredient9 : ''}</p>
          <p>{newDrink.strIngredient10 ? newDrink.strIngredient10 : ''}</p>
          <p>{newDrink.strIngredient11 ? newDrink.strIngredient11 : ''}</p>
          <p>{newDrink.strIngredient12 ? newDrink.strIngredient12 : ''}</p>
          <p>{newDrink.strIngredient13 ? newDrink.strIngredient13 : ''}</p>
          <p>{newDrink.strIngredient14 ? newDrink.strIngredient14 : ''}</p>
          <p>{newDrink.strIngredient15 ? newDrink.strIngredient15 : ''}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleCocktail
