import React, { useState } from 'react'

function ParImpar({num = 0}) {

    return (
      <div>
          <h2>O resultado é:</h2>
          {num % 2 == 0 
          ? <h2>par</h2> 
          : <h2>impar</h2>
          }
      </div>
    )
}

export default ParImpar