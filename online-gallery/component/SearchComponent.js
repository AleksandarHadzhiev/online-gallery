import classes from "../styles/SearchComponent.module.css";
import { FaSearch } from 'react-icons/fa';

function SearchComponent(props){

    return (
        <div className={classes.top}>
            <form className={classes.search}>
                <input onChange={(e)=>{
                    e.preventDefault();
                    if(e.target.value.length>=1){
                        props.searchFor(e.target.value);
                    }
                }} placeholder="Search..." type="text"/>
                <button><FaSearch/></button>
            </form>
        </div>
    )
}

export default SearchComponent;