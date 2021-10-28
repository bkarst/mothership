import React, { useState } from 'react';
import Broadcast from './Broadcast'
import PersonalMessages from './PersonalMessages'

const selectClass = (myFeed, currentFeed) => {
    console.log(myFeed, currentFeed)
    if (myFeed == currentFeed){
        return 'selected-class'
    }
    else {
        return 'unselected-class'
    }
}

export default function Inbox(props){
    const [currentFeed, setCurrentFeed] = useState('messages');
    var feed = <PersonalMessages />;
    if (currentFeed == 'broadcasts'){
        feed =  <Broadcast />
    }
    return (
        <div className='inbox-container'>
            <div className='inbox-title-bar'>
                <div className={selectClass("messages", currentFeed)} onClick={() => setCurrentFeed("messages")}>
                    <img style={{width: 40}} src='/messages-icon.png' />
                </div>
                <div className={selectClass("broadcasts", currentFeed)} onClick={() => setCurrentFeed("broadcasts")}>
                    <img style={{width: 40}} src='/broadcast.png' />
                </div>
            </div>
            <div>
                {feed}
            </div>
        </div>
    )
}