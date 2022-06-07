import Link from "next/link";

function MainNavigation(){
    return(
        <div>
            <div>
                <Link href="/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F280x280_RS%2Fa4%2F0b%2F1c%2Fa40b1c2a62a4b130f8689c729da2b37f.jpg&f=1&nofb=1"/></Link>
                <div>
                    <Link href="/videos">Videos</Link>
                    <Link href="/pictures">Pictures</Link>
                </div>
            </div>
        </div>
    )
}

export default MainNavigation;