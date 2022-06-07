import VideosList from "../component/VideosList";
import VideosAPICalls from '../services/VideosAPICalls'

function VideosPage(props){
    return (
        <div>
            <div>
                <form>
                    <input type="text"/>
                    <button>Search</button>
                </form>
            </div>
            <VideosList videos = {props.videos}/>
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