import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/Description'
import RecipeIngredients from './components/Ingredients'
import RecipePhoto from './components/Photos'

function App() {

  return (
    <>
      <div className="App">
        <div className="recipePhotoBlock">
            <RecipePhoto />
            <div>
              <Description />
              <RecipeIngredients />
            </div>
        </div>
      </div>
    </>
  )
}

export default App