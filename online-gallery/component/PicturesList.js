import PictureItem from "./PictureItem";

function PicturesList(props){

    const pictures = props.pictures;
    console.log(pictures)
    return (
        <div>
            {pictures.map((picture)=>{
            return <PictureItem key={picture.id} picture={picture}/>})}

        </div>
    )
}

export default PicturesList;