import React from 'react'
import CardA from './components/CardA'
import CardB from './components/CardB'
import CardC from './components/CardC'

function App() {
  return (
   <>
    <CardA name="Ravindra"/>
    <CardC img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj0r68jZH4eo3fYSF4w2kuacrnLWu69OP644HsnhNkw&s=10"/>
    <CardA/>
    <CardB/>
    <CardA/>
    </>
    
  )
}

export default App