import React from 'react'



function Header() {
    function logout(){
        localStorage.removeItem('request')
        localStorage.removeItem('activities')
        localStorage.removeItem('publish')
        localStorage.removeItem('inputs')
        window.location.href='/'
    }
    return (
        <div className="header">
            <h3 className='title'>U tell, V do...</h3>
            <button  className='logout' onClick={logout}>Logout</button>
        </div>
    )
}

export default Header;