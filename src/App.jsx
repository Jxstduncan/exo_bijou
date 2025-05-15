import { useState } from 'react'
import articles from '../Articles.json'
import './App.css'
import Articles from './Components/Articles/Articles'
import Budget from './Components/Budget/Budget'
import Panier from './Components/Panier/Panier'
import Items from './Components/Items/Items'


function App() {
  const [budget, setBudget] = useState(1000)
  const acheter = (article) => {
    setBudget(budget - article.prix)
    article.stock = article.stock - 1
    article.quantite = article.quantite + 1
  }
  const rendre = (article) => {
    article.stock += 1
    article.quantite -= 1
    console.log(article);
    setBudget(budget + article.prix)

  }


  return (
    <>

      <Budget budget={budget} />
      <div className='df'>
        {
          articles.map(article => (
            <Articles article={article} acheter={acheter} budget={budget} />
          ))
        }
      </div>
      {/* <Items article={articles}  rendre={rendre} /> */}
      <Panier article={articles} rendre={rendre} />
    </>
  )
}

export default App
