import ReactPlayer from "react-player";

function VideoItem(props){
    return (
        <div>
            <ReactPlayer url="https://www.youtube.com/watch?v=hydR_BK7pVY"/>
            <div>
                <p>Username</p>
                <a href="">Link to user page</a>
            </div>
        </div>
    )
}

export default VideoItem;