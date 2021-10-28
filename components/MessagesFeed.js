export default function Inbox(props){
    const [currentFeed, setCurrentFeed] = useState('messages');
    return (
        <div className='inbox-container'>
            <div>
                <div onClick={() => setCurrentFeed("messages")}>
                    Messages
                </div>
                <div onClick={() => setCurrentFeed("broadcasts")}>
                    Public Feed
                </div>
            </div>
        </div>
    )
}