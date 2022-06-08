import PictureItem from "./PictureItem";
import classes from "../styles/List.module.css";


function PicturesList(props){

    const pictures = props.pictures;
    return (
        <div className={classes.container}>
            {pictures.map((picture)=>{
            return <PictureItem key={picture.id} picture={picture}/>})}

        </div>
    )
}

export default PicturesList;