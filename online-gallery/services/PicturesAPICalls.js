import axios from "axios";

const API_KEY = "563492ad6f9170000100000132ccdf1b436f4e53ab6890c0546a190a";
const BASE_URL = "https://api.pexels.com/v1/";

const header = {
    Authorization: API_KEY
}

class PicturesAPICalls{
    getCuratedPhotos(){
        return axios.get(BASE_URL+"curated?page=2&per_page=40",{headers:header});
    }

    getSearchedPhoto(query){
        return axios.get(BASE_URL+"search?query="+query+"&per_page=40/",{headers:header});
    }
}

export default new PicturesAPICalls();