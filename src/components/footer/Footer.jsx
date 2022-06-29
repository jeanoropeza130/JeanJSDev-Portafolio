
import "./footer.css"
import { BsLinkedin, BsTelegram, BsGithub, BsWhatsapp  } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaInstagram  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='f'>
      <div className="f1">
      <a href="https://www.linkedin.com/in/jean-luis-oropeza" target="_blank" rel="noreferrer"><BsLinkedin  className="f-ic" /></a>
      <a href="https://t.me/jl4x4" target="_blank" rel="noreferrer"><BsTelegram className="f-ic"/></a>
      <a href="https://wa.me/584243176625?text=Hola+Jean+Podrias+darme+mas+informacion+de+tu+experiencia+como+Dev+gracias" target="_blank" rel="noreferrer"><BsWhatsapp  className="wa-ic"/></a>
      <a href="https://github.com/jeanoropeza130" target="_blank" rel="noreferrer"><BsGithub className="git-ic"/></a>

      <a href="https://twitter.com/JeanLuisOropez1" target="_blank" rel="noreferrer"><FaTwitterSquare className="f-ic"/></a>
      <a href="https://www.instagram.com/jeanjsdev/" target="_blank" rel="noreferrer"><FaInstagram className="ins-ic"/></a>
      <a href="https://www.youtube.com/channel/UC7pUNt3IuCzoZryPdCPCLpw" target="_blank" rel="noreferrer"><FaYoutube  className="you-ic"/></a>
      <a href="https://www.facebook.com/profile.php?id=100081109116431" target="_blank" rel="noreferrer"><FaFacebookSquare  className="fac-ic"/></a>

     
</div>
<p className="f-text">
  Desarrollado por Jean Luis Oropeza ©2022 Derechos reservados
</p>

    </div>
  )
}

export default Footer