import VideoItem from "./VideoItem";

function VideosList(props){

    const videos = props.videos;
    console.log(videos)
    return (
        <div>
            {videos.map((video)=>{
            return <VideoItem key={video.id} video={video}/>})}

        </div>
    )
}

export default VideosList;