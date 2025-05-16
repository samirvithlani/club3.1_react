import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
  return (
    <div>
        <h1>MOVIES</h1>
        <ul>
          <li>
            <Link to="/playing/raid2">Raid 2</Link>
          </li>
          <li>
            <Link to="/playing/10002">Chava</Link>
          </li>
        </ul>
    </div>
  )
}
