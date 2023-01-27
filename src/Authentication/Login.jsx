import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Login() {
    const [value, setValue]=useState({email:'',password:''});
    const[users,setUsers]=useState([])
    useEffect(()=>{
        if(localStorage.getItem('users')){
            setUsers(JSON.parse(localStorage.getItem('users')).values)
        }
    },[]);

function handleChange(data){
    var {name,value} =data.target;
    setValue(prev=>{
        return{
            ...prev,
            [name]:value,
        }
    })
}

function handleClick(){
    if(localStorage.getItem('users')){
        // eslint-disable-next-line array-callback-return
        users.map(user=>{
            if(user.email === value.email && user.password === value.password){
                window.location.href='/index/'+user.email+'/'
+user.role            }
        })
    }else {
        alert('No user found')
    }
}

    return (
       <div className='Authpage'>
        <div className="container">
            <h3>Login</h3>
            <input type="email" name="email" value={value.email} onChange={handleChange} placeholder='e-mail' />
            <input type="password" name='password' value={value.password} onChange={handleChange} placeholder='password' />
            <button onClick={handleClick}>Login</button>
            <div className='signup-div'>
            <p>Don't have an account?</p>
            <Link to={'/signup'}>Sign up</Link>
            </div>
            
        </div>
       </div>
    )
}

export default Login;