import classes from "../styles/SearchComponent.module.css";
import { FaSearch } from 'react-icons/fa';

function SearchComponent(){
    return (
        <div className={classes.top}>
            <form className={classes.search}>
                <input placeholder="Search..." type="text"/>
                <button><FaSearch/></button>
            </form>
        </div>
    )
}

export default SearchComponent;