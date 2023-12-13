import Image from "next/image";
import style from "./Hero.module.scss"
import ZapIcon from "@/components/ZapButton/ZapIcon";

const Hero = () => {
    return (
        <div className={style.Hero}>
            <div className={style.heroImage}>
                <Image src={"/logo01.jpeg"} fill style={{objectFit:"cover"}} alt=""/>
            </div>
            <div className={style.heroHeader}>
                <h1>Ser no mundo</h1>
            </div>
            <div className={style.heroSubText}>
                <p>
                Entre fronteiras, descubra-se. Explore a terapia como sua bússola pessoal para adaptar-se, prosperar e florescer em terras estrangeiras.
                </p>
            </div>
            <div className={style.zapButton}>
                <ZapIcon/> Agendar consulta
            </div>
        </div>
    );
}
 
export default Hero;