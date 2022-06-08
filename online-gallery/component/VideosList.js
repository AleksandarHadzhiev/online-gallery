import VideoItem from "./VideoItem";
import classes from "../styles/List.module.css";

function VideosList(props){

    const videos = props.videos;
    return (
        <div className={classes.container}>
            {videos.map((video)=>{
            return <VideoItem key={video.id} video={video}/>})}
        </div>
    )
}

export default VideosList;