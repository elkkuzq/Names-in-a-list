import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
let names = [
  { name: 'rick'},
  { name: 'morty'},
  { name: 'summer'},
  { name: 'jerry'}
]

let allNames = names.reduce(function(last, name) {
  return <div>
    {last} {name.name}
  </div>
}, '')
  return(
    <div>
      <h1>Rick and Morty</h1>
      <h3>{allNames}</h3>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
