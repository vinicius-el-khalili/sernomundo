"use client"
import { useState } from "react";
import NavButton from "./NavButton";
import style from "./Navbar.module.scss"
const Navbar = () => {
    const [menu,setMenu] = useState<boolean>(false)
    const toggleMenu = ()=>{setMenu(!menu)}
    return (
        <nav className={!menu?style.Navbar:`${style.Navbar} ${style.NavbarOn}`}>
            <NavButton menu={menu} toggleMenu={toggleMenu}/>
        </nav>
    );
}
 
export default Navbar;