import Link from "next/link";
import { HomeIcon } from 'react-feather';


export default function Header() {
    return (
        <header>
            <Link href="/">
                <HomeIcon />    
            </Link>            
        </header>
    )
}