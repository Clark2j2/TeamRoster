import React, {useEffect, useState} from 'react'
import Table from'react-bootstrap/Table';
import {navigate, Link} from '@reach/router'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


export default props => {
    const [name, setName] = useState([]);
    const [position, setPosition] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [focusedUser, setFocusedUser] = useState();
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

    const deleteButton = (id) =>{
        axios.delete('http://localhost:8000/api/users/delete/' + focusedUser._id)
        .then(res => {
            console.log(res);
        })
    }
    const showHandle = (name) =>{
        console.log(name);
        handleShow();
        setFocusedUser(name);
    }


        return(
        <div>
            <h4><Link to="/players/list/">List</Link></h4>
            <h4> | </h4>
            <h4><Link to="/players/addplayer/"> Add Player</Link></h4>
                <div>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {name.map((user, idx) =>(
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td><Button variant="primary" onClick={()=>showHandle(user)}>
                        Delete
                        </Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            

            <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>Would you like to delete this player?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteButton}>
              Confirm Delete
            </Button>
          </Modal.Footer>
        </Modal>
                </div>
        </div>
    )
}

