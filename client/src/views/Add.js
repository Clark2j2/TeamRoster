import React from 'react'
import AddPlayerForm from '../components/addplayerform'
import {Link} from '@reach/router'
export default props => {
    return(
        <div>
            <h4><Link to="/players/list">List</Link></h4>
            <h4> | </h4>
            <h4><Link to="/players/addplayer/">Add Player</Link></h4>
            <div>
                <AddPlayerForm />
            </div>
        </div>
    )
}