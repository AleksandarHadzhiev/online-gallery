import SearchComponent from "../component/SearchComponent";
import VideosList from "../component/VideosList";
import VideosAPICalls from '../services/VideosAPICalls'
import classes from "../styles/Page.module.css";

function VideosPage(props){
    return (
        <div className={classes.page}>
            <SearchComponent/>
            <VideosList className={classes.content} videos = {props.videos}/>
        </div>
    )
}

export async function getStaticProps(){
  // fetch data from API
  const res = await VideosAPICalls.getPopularVideos();

  return {
      props:{
          videos:res.data.videos
      }
  }
}
 

export default VideosPage;