import ReactPlayer from "react-player";
import classes from "../styles/PictureItem.module.css";
import { FaUser } from "react-icons/fa";

function VideoItem(props){

    const video = props.video;
    console.log(video.url);
    return (
        <div  className={classes.card}>
            <ReactPlayer width={"520px"} height={"520px"} url="https://www.pexels.com/video/a-cat-on-the-floor-looking-curiously-at-the-camera-4147614/"/>
            <div className={classes.userInformation}>
                <p>{video.user.name}</p>
                <a href={video.user.url}><FaUser/>Profile</a>
            </div>
        </div>
    )
}

export default VideoItem;