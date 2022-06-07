import classes from "../styles/PictureItem.module.css";


function PictureItem(props){

    const picture = props.picture;
    console.log(picture);
    return (
        <div>
            <img src={picture.src.portrait} alt={picture.alt}/>
            <div>
                <p>{picture.photographer}</p>
                <a href={picture.photographer_url}>Link to photograpger page</a>
            </div>
        </div>
    )
}

export default PictureItem;