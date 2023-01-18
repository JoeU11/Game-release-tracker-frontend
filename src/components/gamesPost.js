import axios from 'axios'

export default function AddGame() {
  function handleSubmit(event) {
    console.log("submitting")
    event.preventDefault()
    let params = new FormData(event.target)
    axios.post('http://localhost:3000/games', params).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })

  }

  return (
    <div id="addGame">
      <form onSubmit={handleSubmit}>
        <p> Name: <input type="text" name="name" /></p>
        <p> Description: <input type="text" name="description" /></p>
        <p> Release Date: <input type="date" name="release_date" /></p>
        <p> Anticipation Level: <input type="integer" name="anticipation" /></p>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}