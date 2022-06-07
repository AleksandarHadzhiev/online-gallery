import PicturesList from "../component/PicturesList";
import PicturesAPICalls from "../services/PicturesAPICalls";


function PicturesPage(props){
    return (
        <div>
            <div>
                <form>
                    <input type="text"/>
                    <button>Search</button>
                </form>
            </div>
            <PicturesList pictures = {props.images}/>
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