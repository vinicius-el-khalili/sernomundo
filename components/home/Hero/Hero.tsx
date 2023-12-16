"use client"

import Image from "next/image";
import style from "./Hero.module.scss"
import ZapIcon from "@/components/ZapButton/ZapIcon";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Hero = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    const timelineRef = useRef<gsap.core.Timeline|null>(null)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{
            timelineRef.current = gsap.timeline()
            .fromTo("._",{},{})
            .fromTo(".heroImage",{x:-10,opacity:0},{x:0,opacity:1})
            .fromTo(".heroHeader",{x:-20,opacity:0},{x:-20,opacity:1})
            .fromTo(".heroSubText",{y:-10,color:"transparent"},{y:0,color:"black",transition:2})
            .fromTo(".zapButton",{y:-10,opacity:0},{y:0,opacity:1,transition:2})
        }, rootRef)
    },[])
    return (
        <div className={style.Hero} ref={rootRef}>
            <div className={`${style.heroImage} heroImage`}>
                <Image src={"/logo01.jpeg"} fill style={{objectFit:"cover"}} alt=""/>
            </div>
            <div className={`${style.heroHeader} heroHeader`}>
                <h1>Ser no mundo</h1>
            </div>
            <div className={`${style.heroSubText} heroSubText`}>
                <p>
                Entre fronteiras, descubra-se. Explore a terapia como sua bússola pessoal para adaptar-se, prosperar e florescer em terras estrangeiras.
                </p>
            </div>
            <div className={`${style.zapButton} zapButton`}>
                <ZapIcon/> Agendar consulta
            </div>
            <Ok/>
        </div>
    );
}
 
export default Hero;

const Ok = () => {
    return <><button onClick={()=>{console.log("ok")}}></button></>
}