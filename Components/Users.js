import React, { useState } from 'react'
import data from "./data.json";
function Users() {
    const [ourusers, setOurusers] = useState(data);
    const [id, setId] = useState(0);
    const [nom, setName] = useState("");
    const [email, setEmail] = useState("");
    const deleteuser = (indice) => {
        let t = [...ourusers]
        t.splice(indice, 1);
        setOurusers(t)
        console.log(ourusers);
    }
    const adduser = () => {
        let newUser = { id: id, name: nom, email: email };
        setOurusers([...ourusers, newUser]);
    }
    return (
        <div>
            <div className='form'>
                <input type="number" name="id" placeholder='id' onChange={(e) => { setId(e.target.value) }} />
                <input type="text" name="nom" placeholder='nom' onChange={(e) => { setName(e.target.value) }} />
                <input type="email" name="email" placeholder='email' onChange={(e) => { setEmail(e.target.value) }} />
                <button onClick={adduser}>Ajouter</button>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>indice</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ourusers.map(
                            (user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <a className='btn btn-primary' href={`https://www.${user.website}`} target="_blank">plus</a>
                                            <button className='btn btn-danger' onClick={() => { deleteuser(index) }}>Suprimer</button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users