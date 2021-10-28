import React, { useEffect, useState } from 'react';
import Stories, { WithSeeMore } from 'react-insta-stories'
import { useSelector } from "react-redux"

export default function MessageHeading(props){
    
    const loggedInStatus = useSelector(state => state.loggedInStatus)

    return (
        <div className='message-heading-container'>
            <div className='profile-pic-container'>
                <img src={props.profilePicUrl} className='profile-pic' />
            </div>
            <div className='name-container'>
                {props.name}
            </div>
            <div className='subject-container'>
                {props.subject}
            </div>
        </div>
    )
}