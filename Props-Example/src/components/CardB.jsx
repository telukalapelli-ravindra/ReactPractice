import React from 'react'

function CardB(props) {

    const age=props.age;

    const v=fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
  
  return (
    <div>CardB
        {
            v
        }
    </div>

  )
}

export default CardB