import ReactPlayer from "react-player";

function VideoItem(props){

    const video = props.video;
    console.log(video.url);
    return (
        <div>
            <ReactPlayer url={video.url}/>
            <div>
                <p>{video.user.name}</p>
                <a href={video.user.url}>Link to user page</a>
            </div>
        </div>
    )
}

export default VideoItem;