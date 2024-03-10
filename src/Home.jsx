import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';


function Home() {
    const users = useSelector((state)=> state.users)
    const dispatch = useDispatch();

    const handleDelete = (id)=>{
        dispatch(deleteUser({id:id}))
    }
  return (
    <div className='container'>
        <h1>Crud Redux Json</h1>
        <Link to={'/create'} className="btn btn-success my-3">Create</Link>
        <div className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-3'>Delete</button>

                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </div>     
    </div>
  )
}

export default Home