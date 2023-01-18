export default function Game(game) {
  return (
    <section className="game-show">
      <h2>Title: {game.name}</h2>
      <p>Description</p>
      <p>release date</p>
      <p>anticipation</p>
    </section>
  )
}