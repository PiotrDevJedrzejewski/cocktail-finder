import React from 'react'
import { BsSearch } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <h1 className='about__header'>About this app</h1>
        <p className='about__version'>version 1.0.0</p>
        <div className='about__backgroud'>
          <BsSearch className='about__icon' />
          <p className='about__text'>
            Introducing CocktailFinder, the ultimate drink discovery app crafted
            for both novice mixologists and seasoned cocktail enthusiasts alike.
            Powered by a comprehensive free-to-use API, our app is brimming with
            an expansive array of drinks, ensuring you find the perfect
            concoction to suit your palate. CocktailFinder is a user-friendly
            React app that allows you to explore and discover a myriad of drinks
            from across the globe. Whether you're looking to recreate a classic
            Manhattan, venture into exotic cocktails, or simply whip up a quick
            and easy mocktail, we've got you covered. Each drink is accompanied
            by a detailed ingredient list, ensuring you have all the information
            at your fingertips.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
