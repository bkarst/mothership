import React, { useState } from 'react';
import Broadcast from './Broadcast'
import PersonalMessages from './PersonalMessages'

export default function Inbox(props){
    const [currentFeed, setCurrentFeed] = useState('messages');
    var feed = <PersonalMessages />;
    if (currentFeed == 'broadcasts'){
        feed =  <Broadcast />
    }
    return (
        <div className='inbox-container'>
            <div className='inbox-title-bar'>
                <div className='inbox-title-bar-label' onClick={() => setCurrentFeed("messages")}>
                    Messages
                </div>
                <div className='inbox-title-bar-label' onClick={() => setCurrentFeed("broadcasts")}>
                    Public Feed
                </div>
            </div>
            <div>
                {feed}
            </div>
        </div>
    )
}