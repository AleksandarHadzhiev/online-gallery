import PicturesList from "../component/PicturesList";
import PicturesAPICalls from "../services/PicturesAPICalls";
import classes from "../styles/Page.module.css";
import SearchComponent from "../component/SearchComponent";

function PicturesPage(props){
    return (
        <div className={classes.page}>
            <SearchComponent/>
            <div className={classes.content}>
                <PicturesList className={classes.content} pictures = {props.images}/>
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