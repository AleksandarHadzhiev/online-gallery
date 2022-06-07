import axios from "axios";

const API_KEY = "563492ad6f9170000100000132ccdf1b436f4e53ab6890c0546a190a";
const BASE_URL = "https://api.pexels.com/videos/"

const header = {
    Authorization: API_KEY
}

class VideosAPICalls{
    getPopularVideos(){
        return axios.get(BASE_URL+"popular?per_page=1",{headers:header});
    }

    getSearchedVideo(query){
        return axios.get(BASE_URL+"search?query="+query+"&per_page=40/",{headers:header});
    }
}

export default new VideosAPICalls();