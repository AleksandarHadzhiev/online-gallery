import MainNavigation from "./MainNavigation";
import classes from "../../styles/Layout.module.css";

function Layout(props){
    return (
        <div className={classes.nav}>
            <MainNavigation/>
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;