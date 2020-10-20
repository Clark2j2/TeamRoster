import React from 'react'
import {Link} from '@reach/router'
export default props => {
    return(
    <div>
        <h4>Player Status - Select a game</h4> <br />
        <h4><Link to="/status/game/1/">Game 1</Link></h4>
        <h4> | </h4>
        <h4><Link to="/status/game/2/">Game 2</Link></h4>
        <h4> | </h4>
        <h4><Link to="/status/game/3/">Game 3</Link></h4>
    </div>
    )
}