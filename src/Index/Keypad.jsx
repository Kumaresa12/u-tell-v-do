import React from 'react'
import { useState } from 'react';

function Keypad() {

    const [keyValue,setKeyValue]= useState('');

    function keyClick(data){
        var {value} = data.target;
        setKeyValue(prev=>{
return value + '(' +prev + ')'
        })
    }

    function handleClick(){
        if(keyValue !==''){
            localStorage.setItem('request',false);
            localStorage.setItem("inputs",keyValue)
            setKeyValue('')
        }
    }
    return (
        <div className='keypad'>
            <input type="text" value={keyValue} placeholder='Single digits only' />
            <div className="btnGroup">
                <div className="row1">
                <button onClick={keyClick} value='one' >1</button>
                <button onClick={keyClick} value='two'>2</button>
                <button onClick={keyClick} value='three'>3</button>
                <button onClick={keyClick} value='four'>4</button>
                </div>
                <div className="row2">
                <button onClick={keyClick} value='five'>5</button>
                <button onClick={keyClick} value='six'>6</button>
                <button onClick={keyClick} value='seven'>7</button>
                <button onClick={keyClick} value='eight'>8</button>
                </div>
                <div className="row3">
                <button onClick={keyClick} value='nine'>9</button>
                <button onClick={keyClick} value='zero'>0</button>
                <button onClick={keyClick} value='add'>+</button>
                <button onClick={keyClick} value='subtract'>-</button>
                </div>
                <div className="row4">
                <button onClick={keyClick} value='multiply'>*</button>
                <button onClick={keyClick} value='divide'>/</button>
                </div>
                
            </div>
            <div className="transfer">
            <button className='send' onClick={handleClick}>Send</button>
            <button className='clear' onClick={()=> setKeyValue('')}>Clear</button>
            </div>
            
        </div>
    )
}

export default Keypad;