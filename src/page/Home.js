import React from 'react'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
import Loading from '../components/Loading'
import { useAppContext } from '../context/context'

const Home = () => {
  const { loading } = useAppContext()

  return (
    <main className='home'>
      <h1 className='home__heading'>Search Cocktail</h1>
      <SearchForm />
      {loading ? <Loading /> : <CocktailList />}
    </main>
  )
}

export default Home
