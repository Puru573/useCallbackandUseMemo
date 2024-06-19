import React from 'react'

function Child({counter}) {
  console.log("child render");
  return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}

export default React.memo(Child);
