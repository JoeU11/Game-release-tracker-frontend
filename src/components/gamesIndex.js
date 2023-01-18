import axios from 'axios'
import { useState, useEffect } from 'react'
import Game from './game.js'

export default function GamesIndex() {
  const [games, setGames] = useState([])

  function getGames() {
    axios.get("http://localhost:3000/games").then(response => {
      console.log(response.data)
      setGames(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(getGames, [])
  const gameElements = games.map(game => {
    return (
      <Game key={game.id} {...game} />
    )
  })

  return (
    <div>
      {gameElements}
    </div>
  )
}