import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from './UserReducer';


function Update() {
  const {id} = useParams();
  const users = useSelector((state)=> state.users)
  const existingUser = users.filter(f=> f.id == id)
  const {name,email} = existingUser[0]
  const [uname,setName] =  useState(name)
  const [uemail,setEmail] =  useState(email)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUpdate = (e)=>{
    e.preventDefault();
    dispatch(editUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/')
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
      <h2 className='text-center text-dark'>Edit User</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor=''>Name</label>
            <input type="text" name='name' className='form-control' value={uname} onChange={e => setName(e.target.value)}/>          
            </div>
            <div>
            <label htmlFor=''>Email</label>
            <input type="email" name='email' className='form-control' value={uemail} onChange={e => setEmail(e.target.value)}/>          
            </div>
            <button className='btn btn-info mt-3'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update