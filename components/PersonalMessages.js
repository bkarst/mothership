import React, { useState } from 'react';
import MessageHeading from './MessageHeading'
import Stories, { WithSeeMore } from 'react-insta-stories'

const image = {
	display: 'block',
	maxWidth: '100%',
	borderRadius: 4,
}

const code = {
	background: '#eee',
	padding: '5px 10px',
	borderRadius: '4px',
	color: '#333'
}

const contentStyle = {
	background: '#333',
	width: '100%',
	padding: 20,
	color: 'white',
	height: '100%'
}

const customSeeMore = {
	textAlign: 'center',
	fontSize: 14,
	bottom: 20,
	position: 'relative'
}

const Story2 = ({ action, isPaused }) => {
	return <div style={{ ...contentStyle, background: 'Aquamarine', color: '#333' }}>
		<h1>This is the contents of your personal message.</h1>
		<p>You can share stories publicly or send them directly</p>
		<h1>{isPaused ? 'Paused' : 'Playing'}</h1>
	</div>
}

const stories2 = [
	{
		content: ({ action, isPaused }) => {
			return <div style={contentStyle}>
				<p>Users.</p>
				<p>Now render React components right into your stories.</p>
				<p>Possibilities are endless, like here - here's a code block!</p>
				<pre>
					<code style={code}>
						console.log('Hello, world!')
        			</code>
				</pre>
				<p>Or here, an image!</p>
				<br />
				<img style={image} src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
				<h3>Perfect. But there's more! →</h3>
			</div>
		}
	},
	{
		content: ({ action, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: 'snow', padding: 20, height: '100%' }}>
				<h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
				<h1 style={{ marginTop: 5 }}>We have our good old image and video stories, just the same.</h1>
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}>A custom See More message →</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>,
		duration: 5000
	},
	{
		url: 'https://picsum.photos/1080/1920',
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>
	},
	{
		url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
		type: 'video'
	},
	{
		content: Story2
	}
]

export default function PersonalMessages(props){
	const emptyStory = 0
	var jsx = <Stories
	loop
	keyboardNavigation
	defaultInterval={8000}
	stories={stories2}
	onStoryEnd={(s, st) => console.log('story ended', s, st)}
	onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)}
	onStoryStart={(s, st) => console.log('story started', s, st)}
	storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }}
/>
	const [currentStory, setCurrentStory] = useState(emptyStory);
	if (currentStory == 0){
		jsx = <div style={{fontFamily:"monospace", color: "darkblue"}}>
			Click on a Message to see the new way to go through your Inbox.
			</div>
	}

    return (
        <div className='messages-container'>
            <div onClick={() => setCurrentStory(1) }>
				< MessageHeading subject={"Global Payment Settlements"}
									name={"David Schwartz"}
									profilePicUrl={"/schwartz.jpeg"} />
				< MessageHeading subject={"Boot the Metaverse"}
									name={"Mark Zuckerberg"}
									profilePicUrl={"/zuck.jpeg"} />
				< MessageHeading subject={"Electric Ladyland"}
									name={"Elon Musk"}
									profilePicUrl={"/musk.jpeg"} />
            </div>
			<div>
				{jsx}
			</div>
        </div>
    )
}