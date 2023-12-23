import Image from "next/image";
import style from "./About.module.scss"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const About = () => {
    return (
        <>
        <div className={style.About}>

            <div className={style.cl1}>
                <div className={style.imgContainer}>
                    <Image src={"/duck.jpg"} fill style={{objectFit:"cover"}} alt=""/>
                </div>
                <div className={style.subText}>
                    <p>Mariana Grau Jamardo</p>
                    <p>Psicóloga clínica</p>
                    <p>CRP 01/1234</p>
                </div>
            </div>

            <div className={style.text}>
                Minha missão como psicóloga clínica é facilitar o processo de autoconhecimento dos meus clientes, capacitando-os a tomar decisões mais alinhadas com sua verdadeira vontade, em vez de ceder às pressões da sociedade em que vivemos.
                Durante minha graduação em psicologia clínica, meu foco principal de estudo e especialização foi nas dinâmicas de poder e relações de gênero, com ênfase na abordagem Daseinsanalítica. 
                Desde 2021 resido na Suécia, e após 8 anos atuando na área de Psicologia Organizacional, agora realizo atendimentos online para pessoas de diversas partes do mundo. Minha própria experiência como estrangeira e minha adaptação a uma nova cultura me permitem compreender os desafios enfrentados por pessoas em situações semelhantes. No entanto, entendo que cada jornada é única e requer uma abordagem personalizada. Será um prazer conhecer a sua história e facilitar o seu processo de autoconhecimento nessa jornada.
            </div>

            <div className={style.icons}>
                <FaWhatsapp size={28}/>
                <FaLinkedin size={28}/>
            </div>

        </div>
        </>
    );
}
 
export default About;