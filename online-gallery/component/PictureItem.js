import classes from "../styles/PictureItem.module.css";
import { FaUser } from "react-icons/fa";

function PictureItem(props){

    const picture = props.picture;
    console.log(picture);
    return (
        <div className={classes.card}>
            <img src={picture.src.portrait} alt={picture.alt}/>
            <div className={classes.userInformation}>
                <p>{picture.photographer}</p>
                <a href={picture.photographer_url}><FaUser/>Profile</a>
            </div>
        </div>
    )
}

export default PictureItem;