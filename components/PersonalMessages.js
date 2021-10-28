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
	return <div style={{ ...contentStyle,  background: '#000', color: '#fff', paddingTop: 100 }}>
		<h2>Stories are like social media posts.</h2>
		<h1>You can share stories publicly or send them directly to your friends.</h1>
	</div>
}

const Story3 = ({ action, isPaused }) => {
	return <div style={{ ...contentStyle,  background: '#000', color: '#fff', paddingTop: 100 }}>
		<h2>The younger generation is accustomed to media rich content and messaging.</h2>
	</div>
}

const stories2 = [
	{
		content: Story2
	},
	{
		url: 'https://picsum.photos/1080/1920',
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>
	},
	{
		url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
		type: 'video'
	}
]

const stories3 = [
	{
			content: Story3
		},
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
	}
]



export default function PersonalMessages(props){
	const emptyStory = 0
	const stories = [stories2, stories3]
	
	var selectedStory = stories2
	
	

	const [currentStory, setCurrentStory] = useState(emptyStory);
	console.log(currentStory%2 == 0)
	if (currentStory%2 == 0){
		selectedStory = stories3
	}
	var jsx = <Stories
	
	keyboardNavigation
	defaultInterval={8000}
	stories={selectedStory}
	onStoryEnd={(s, st) => console.log('story ended', s, st)}
	onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)}
	onStoryStart={(s, st) => console.log('story started', s, st)}
	storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }} />
	if (currentStory == 0){
		jsx = <div style={{fontFamily:"monospace", color: "darkblue"}}>
			Click on a Message to see the new way to go through your Inbox.
			</div>
	}

    return (
        <div className='messages-container'>
            <div onClick={() => setCurrentStory(currentStory + 1) }>
			< MessageHeading subject={"The Meaning of Life"}
									name={"Elon Musk"}
									profilePicUrl={"/musk.jpeg"} 
									date='7 months ago'
									/>
				< MessageHeading subject={"XRP to the Moon"}
									name={"David Schwartz"}
									profilePicUrl={"/schwartz.jpeg"} 
									date='today'
									/>
				< MessageHeading subject={"Facebook 2.0"}
									name={"Mark Zuckerberg"}
									profilePicUrl={"/zuck.jpeg"} 
									date='yesterday' />
				
            </div>
			<div>
				{jsx}
			</div>
        </div>
    )
}