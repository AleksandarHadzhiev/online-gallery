import ReactPlayer from "react-player";
import classes from "../styles/PictureItem.module.css";
import { FaUser } from "react-icons/fa";

function VideoItem(props){

    const video = props.video;

    return (
        <div  className={classes.card}>
            <ReactPlayer width={"100%"} controls={true} url={video.video_files[0].link}/>
            <div className={classes.userInformation}>
                <p>{video.user.name}</p>
                <a href={video.user.url}><FaUser/>Profile</a>
            </div>
        </div>
    )
}

export default VideoItem;