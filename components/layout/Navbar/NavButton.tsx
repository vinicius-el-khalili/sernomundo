"use client"
import style from "./Navbar.module.scss"
const NavButton = ({menu,toggleMenu}:{
    menu: boolean
    toggleMenu: ()=>void
}) => {
    return (
    <div
    onClick={toggleMenu}
    className={!menu?style.NavButton:`${style.NavButton} ${style.NavButtonOn}`}>
        <div/>
        <div/>
        <div/>
    </div>
    );
}
 
export default NavButton;