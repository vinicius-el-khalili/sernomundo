"use client"
import { useState } from "react";
import NavButton from "./NavButton";
import style from "./Navbar.module.scss"
import Link from "next/link";
const Navbar = () => {
    const [menu,setMenu] = useState<boolean>(false)
    const toggleMenu = ()=>{setMenu(!menu)}
    return (
        <nav className={!menu?style.Navbar:`${style.Navbar} ${style.NavbarOn}`}>
            <NavButton menu={menu} toggleMenu={toggleMenu}/>
            <Link className={style.link} href={"/"} onClick={toggleMenu}><p>Home</p></Link>
            <Link className={style.link} href={"/"} onClick={toggleMenu}><p>Sobre</p></Link>
            <Link className={style.link} href={"/"} onClick={toggleMenu}><p>Serviços</p></Link>
            <Link className={style.link} href={"/"} onClick={toggleMenu}><p>Artigos</p></Link>
            <Link className={style.link} href={"/"} onClick={toggleMenu}><p>Contato</p></Link>
        </nav>
    );
}
 
export default Navbar;