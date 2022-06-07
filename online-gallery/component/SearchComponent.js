import classes from "../styles/SearchComponent.module.css";
import { FaSearch } from 'react-icons/fa';
import { useRouter } from "next/dist/client/router";


function SearchComponent(props){

    const router = useRouter();

    function searchForPhotos(query){
        props.searchFor(query);
    }

    function searchForVideos(query){
        props.searchFor(query);
    }

    function locationChecker(query){
        if(router.pathname==="/videos"){
            searchForVideos(query);
        }
        else {
            searchForPhotos(query)
        }
    }

    return (
        <div className={classes.top}>
            <form className={classes.search}>
                <input onChange={(e)=>{
                    e.preventDefault();
                    if(e.target.value.length>=1){
                        locationChecker(e.target.value);
                    }
                }} placeholder="Search..." type="text"/>
                <button><FaSearch/></button>
            </form>
        </div>
    )
}

export default SearchComponent;