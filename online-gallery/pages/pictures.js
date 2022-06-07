import PicturesAPICalls from "../services/PicturesAPICalls";


function PicturesPage(){
    return (
        <div>

        </div>
    )
}

export async function getStaticProps(){
  // fetch data from API
  const res = await PixelAPICalls.getCuratedPhotos();

  return {
      props:{
          images:res.data
      }
  }
}


export default PicturesPage;