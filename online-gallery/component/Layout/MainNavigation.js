import Link from "next/link";
import classes from "../../styles/MainNavigation.module.css";


function MainNavigation(){
    return(
        <div className={classes.component}>
            <div className={classes.navigation}>
                <div className={classes.toHome}>
                    <div className={classes.image}></div>
                    <Link className={classes.homeLink} href="/">Home</Link>
                </div>
                <div className={classes.links}>
                    <p><Link href="/videos">Videos</Link></p>
                    <p><Link href="/pictures">Pictures</Link></p>
                </div>
            </div>
        </div>
    )
}

export default MainNavigation;