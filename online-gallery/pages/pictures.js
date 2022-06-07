import PicturesList from "../component/PicturesList";
import PicturesAPICalls from "../services/PicturesAPICalls";
import classes from "../styles/Page.module.css";
import SearchComponent from "../component/SearchComponent";
import {useState } from "react";

function PicturesPage(props){

    const [photos, setPhotos] = useState(null);
 
    async function getPhotosFor(query){
        const res = await PicturesAPICalls.getSearchedPhoto(query);
        console.log(quer);
        if(res.statusText==="OK"){
            console.log(res.data.photos);
            setPhotos(res.data.photos);
        }
        else if(res.code=="ERR_BAD_REQUEST"){
            setPhotos(null);
        }
        
    }

    return (
        <div className={classes.page}>
            <SearchComponent searchFor={(query)=>{
                getPhotosFor(query);
            }}/>
            <div className={classes.content}>
                <PicturesList className={classes.content} pictures = {photos !=null ? photos : props.images}/>
            </div>
        </div>
    )
}

export async function getStaticProps(){
  // fetch data from API
  const res = await PicturesAPICalls.getCuratedPhotos();
  return {
      props:{
          images:res.data.photos
      }
  }
}


export default PicturesPage;