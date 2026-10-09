import { useState } from "react"

function Card(){
  let va=9;
    const[d,setd]=useState("State");

    
    const arr=[
        {n:"ravi"},{

        }
        ,4,64
    ]


   function increment(){
    setd(d+"ravi")
    console.log(d)
   }

    return (
        <>
        <h1>Hello World {d}</h1>
       <button onClick={increment}>Clieckme</button>
        </>

    )

}

export default Card