import classes from "../styles/SearchComponent.module.css";
import { FaSearch } from 'react-icons/fa';

function SearchComponent(){
    return (
        <div className={classes.top}>
            <form className={classes.search}>
                <input placeholder="Search for a photo...." type="text"/>
                <button><FaSearch/></button>
            </form>
        </div>
    )
}

export default SearchComponent;