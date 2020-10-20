import Axios from 'axios'
import React, {useState} from 'react'
import axios from 'axios'
export default props =>{
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    
    const onSubmitHandler = () =>{
        axios.post('http://localhost:8000/api/users/new/', {
            name: name,
            position: position
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    return(
        <div>
            <h3>Add Player</h3>
                <form onSubmit={onSubmitHandler}>
                    <label>Player Name:</label>
                    <input type="text" onChange={e=>setName(e.target.value)}></input><br />
                    <label>Preferred Position:</label>
                    <input type="text" onChange={e=>setPosition(e.target.value)}></input><br />
                    <input type="submit" />
                </form>
        </div>
    )
}