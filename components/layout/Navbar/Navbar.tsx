"use client"
import { useState } from "react";
import NavButton from "./NavButton";
import style from "./Navbar.module.scss"
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    const [menu,setMenu] = useState<boolean>(false)
    const toggleMenu = ()=>{setMenu(!menu)}
    return (
        <nav className={!menu?style.Navbar:`${style.Navbar} ${style.NavbarOn}`}>
            <div className={style.title}>ser no mundo</div>
            <div className={style.logo}>
                <Image src={"/logo01.jpeg"} alt="" fill style={{objectFit:"cover"}}/>
            </div>
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