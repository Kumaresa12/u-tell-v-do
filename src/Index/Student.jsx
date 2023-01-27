import React from 'react'
import { useState, useEffect } from 'react'
import Keypad from './Keypad'
import Header from './Header'


function Student() {
    const [request,setRequest]=useState(false);
    const [activities,setActivities]= useState([]);
    var isThere=JSON.parse(localStorage.getItem('activities'));
const [publish,setPublish]=useState(false);

function requestState(){
if(localStorage.getItem('request')){
    setRequest(localStorage.getItem('request')==='true')
}
if(localStorage.getItem('publish')){
    setPublish(JSON.parse(localStorage.getItem('publish')))
}
}

useEffect(()=>{
    setInterval(requestState,1000)
},[])

useEffect(()=>{
    if(isThere != null){
        setActivities(isThere.values)
    }

},[publish])

console.log(request);

    return (
        <div>
            <Header/>
            <div className="index">
                <div className="request">
                    {request? <h6>You have one request.</h6>:<h6>No request found.</h6>}
                    
                </div>
                <div className='screen'>
                    <h4>Input</h4>
                    {!request && <h5>Wait for the request from master.</h5>}
                    {request && <Keypad/>}
                </div>
                <div className='table'>
                    <h4>Activity</h4>
                    <div className='display'>
                        {activities&& activities.map(activity=><h5>{activity.input}:{activity.output}</h5>)}
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Student;