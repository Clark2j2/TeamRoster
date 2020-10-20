import React, {useState, useEffect} from 'react'
import {Link} from '@reach/router'
import Table from 'react-bootstrap/Table'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import axios from 'axios'
export default props => {
    const [name, setName] = useState([]);
    useEffect(()=>{
        getAllPlayers();
    })

    const getAllPlayers = () => {
        axios.get('http://localhost:8000/api/users/')
            .then(res=>{
                setName(res.data.users)})
            .catch((err) =>{
                console.log(err)
            })
    }

    
        
    return(
        <div>
            <h4><Link to="/status/game/1/">Game 1</Link></h4>
        <h4> | </h4>
        <h4><Link to="/status/game/2/">Game 2</Link></h4>
        <h4> | </h4>
        <h4><Link to="/status/game/3/">Game 3</Link></h4>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {name.map((user, idx) =>(
                    <tr>
                        <td>{user.name}</td>
                        <td>
                        <ToggleButtonGroup type="checkbox" defaultValue={[]}>
                        <ToggleButton value={1}>Playing</ToggleButton>
                        <ToggleButton value={2}>Not Playing</ToggleButton>
                        <ToggleButton value={3}>Undecided</ToggleButton>
                        </ToggleButtonGroup>
                        </td>
                        
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}