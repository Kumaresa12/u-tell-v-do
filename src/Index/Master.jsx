
import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'


function Master() {
    const [input,setInput]=useState();
    const [request,setRequest]=useState();
var isThere =JSON.parse(localStorage.getItem('activities'))
const [activities,setActivities]=useState([]);

useEffect(()=>{
    if(isThere !== null){
        setActivities(isThere.values)
    }
},[])

useEffect(()=>{
    setInterval(function(){
        if(localStorage.getItem('request')){
            setRequest(localStorage.getItem('request')==='true')
        }
        },1000);
        localStorage.setItem('publish',true)
    },[])

    useEffect(()=>{
        if(localStorage.getItem('inputs')){
            setInput(localStorage.getItem('inputs'))
        }
    },[request])

function sendRequest(){
    localStorage.setItem('request',true);
}

function add(value){
    return ['add', value];
}
function subtract(value){
    return ['substract', value];
}
function multiply(value){
    return ['multiply', value];
}
function divide(value){
    return ['divide', value];
}

function one(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+1
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-1
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*1
            }else{
                return Math.floor(parseInt(value[1])/1)
            }
        }
    else{
        return 1
    }
}

function two(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+2
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-2
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*2
            }else{
                return Math.floor(parseInt(value[1])/2)
            }
    }
    else{
        return 2
    }
}

function three(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+3
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-3
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*3
            }else{
                return Math.floor(value[1]/3)
            }

    }
    else{
        return 3
    }
}

function four(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+4
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-4
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*4
            }else{
                return Math.floor(parseInt(value[1])/4)
            }
    }
    else{
        return 4
    }
}

function five(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+5
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-5
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*5
            }else{
                return Math.floor(parseInt(value[1])/5)
            }
    }
    else{
        return 5
    }
}

function six(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+6
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-6
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*6
            }else{
                return Math.floor(parseInt(value[1])/6)
            }

    }
    else{
        return 6
    }
}

function seven(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+7
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-7
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*7
            }else{
                return Math.floor(parseInt(value[1])/7)
            }
    }
    else{
        return 7
    }
}

function eight(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+8
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-8
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*8
            }else{
                return Math.floor(parseInt(value[1])/8)
            }

    }
    else{
        return 8
    }
}

function nine(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+9
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-9
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*9
            }else{
                return Math.floor(parseInt(value[1])/9)
            }

    }
    else{
        return 9
    }
}

function zero(value){

    if(value){
            if(value[0]==='add'){
                return parseInt(value[1])+0
            }else if(value[0]==='subtract'){
                return parseInt(value[1])-0
            }else if(value[0]==='multiply'){
                return parseInt(value[1])*0
            }else{
                return Math.floor(parseInt(value[1])/0)
            }

    }
    else{
        return 0
    }
}
function execute(){
    var answer = eval(input);
    setActivities(prev  => [...prev, {input: input, output: answer}])
    setInput('')
}

function publish(){
    localStorage.setItem('activities', JSON.stringify({values: activities}))
    var pubState = JSON.parse(localStorage.getItem('publish'))
    localStorage.setItem('publish', !pubState);   
}

console.log(request);
    return (
       
<div>
    <Header/>
    
    <div className="index">
   
        <div className="request">
            <h6>Request an input</h6>
            
            <button onClick={sendRequest} disabled={request}>{!request ?'Send':'Sent'}</button>
        </div>
        <h4 className='inputs'>Inputs</h4>
        <div className="inputContainer">
            <input className='input-text' type="text" value={input}/>
            <button className='execute' onClick={execute}>Execute</button>
            <button className='publish' onClick={publish}>publish</button>
        </div>
    </div>
<div className='table'>
    <h4>Answers</h4>
    <div className='display'>
        {activities&& activities.map(activity=>{
            return <h5>{activity.input}:{activity.output}</h5>;
        })}
    </div>
</div>

</div>
    )
}

export default Master;