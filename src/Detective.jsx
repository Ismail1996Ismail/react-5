import { useState } from "react"

function Detective(){
  const [sherlock, setSherlock] = useState('психопат');
  function handleClick(){
    setSherlock('высокоактивный социопа')
  }
  return(
    <div>
      <h1>Шерлок - {sherlock}</h1>
      <button onClick={handleClick}>Узнать правде</button>
    </div>
  )
}
export default Detective