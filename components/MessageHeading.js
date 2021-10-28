import React, { useEffect, useState } from 'react';
import Stories, { WithSeeMore } from 'react-insta-stories'
import { useSelector } from "react-redux"

export default function MessageHeading(props){
    
    const loggedInStatus = useSelector(state => state.loggedInStatus)

    return (
        <div className='message-heading-container'>
            <div >
                <img src={props.profilePicUrl} height='50px' width='50px' className='profile-pic' />
            </div>
            <div  className='name-container'>
            
                {props.name}
            </div>
            <div className='subject-container'>
                {props.subject}
            </div>
            <div style={{width: 100}} className='subject-container'>
                {props.date}
            </div>
        </div>
    )
}