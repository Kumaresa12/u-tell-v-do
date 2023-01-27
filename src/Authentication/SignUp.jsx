import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function SignUp() {
    const [value, setValue] =useState({email:'',role:'',password:'',confirm:''});
    var isThere=JSON.parse(localStorage.getItem('users'));
    var users;

    if(isThere==null){
        users=[]
    }else{
        users=isThere.values;
    }

    function handleChange(data){
        var {name,value}=data.target;
        setValue(prev=>{
            return{
                ...prev,[name]:value,
            }
        })
    }

    function handleClick(){
        console.log(value)
        if(value.email!=='' && value.role!=='' && value.password!=='' && value.confirm!==''){
            if(value.password===value.confirm){
                users.push(value)
                localStorage.setItem('users',JSON.stringify({values: users}))
                window.location.href='/'
            }else{
                alert('Please check the password')
            }
        }else{
            alert('You have to fill all the fields')
        }
    }

    return (
        <div className="signpage">
            <div className="container">
                <h3>Sign Up</h3>
                <input name='email' type="email" value={value.email} onChange={handleChange} placeholder='e-mail' />
                <input name='password' type="password" value={value.password} onChange={handleChange} placeholder="password" />
                <input name='confirm' type="password" value={value.confirm} onChange={handleChange} placeholder="Type password again" />
                <select id='select' name='role' onChange={handleChange} >
                <option value='' hidden></option>
                    <option value='student' >Student</option>
                    <option value='master'>Master</option>
                </select>
                <button onClick={handleClick}>Sign Up</button>
                <Link className='login' to={'/'}>Back to Login.</Link>
            </div>
        </div>
    )
}

export default SignUp