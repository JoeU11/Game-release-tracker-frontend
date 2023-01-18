import { useState, useEffect } from 'react'

export default function Game(game) {
  function friendlyDate(serverDate) {
    let date = new Date(serverDate.split('-')).toString()
    let parsedDate = date.split(' ')
    return `${parsedDate[0]} ${parsedDate[1]} ${parsedDate[2]}, ${parsedDate[3]}`
  }

  return (
    <section className="game-show">
      <h2>Title: {game.name}</h2>
      <p>Description: {game.description}</p>
      <p>Release date: {friendlyDate(game.release_date)}</p>
      <p>anticipation: {game.anticipation}</p>
    </section>
  )
}