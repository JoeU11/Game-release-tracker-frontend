import axios from 'axios'
import { useState, useEffect } from 'react'
import Game from './game.js'

export default function GamesIndex() {
  const [games, setGames] = useState([])

  function getGames() {
    setGames([{ id: 1, name: "test" }, { id: 2, name: "test 2" }])
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