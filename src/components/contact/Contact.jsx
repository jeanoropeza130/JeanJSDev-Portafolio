import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useContext, useRef, useState} from "react";
import emailjs from 'emailjs-com';
import {ThemeContext} from '../../context'



const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
     .sendForm(
       'service_i3ji4p8',
      'template_ka2vr0x',
       formRef.current,
      '1q4QlgKcwUPURlltX'
    )
     .then(
       (result) => {
        console.log(result.text);
        setDone(true)
    }, 
    (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="c">
        <div className="c-bg"></div>
          <div className="c-wrapper">
            <div className="c-left">
              <h1 className="c-title">
              Contacto
              </h1>
              <div className="c-info">

              <div className="c-info-item">
                <img className="c-icon" src={Phone} alt="" 
                />
                   +58 424-3176625
                </div>

                <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" 
                />
                   jeanoropeza130@gmail.com
                </div>

                <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" 
                />
                   Caracas - Venezuela
                </div>
              </div>
            </div>
            <div className="c-right">
              <p className="c-desc">
                  <b>Enviame un Email </b> Siempre estamos dispuesto a trabajar en el proyecto adecuado.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nombre"  name="user_name"/>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Asunto"  name="user_subject"/>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email"  name="user_email"/>
                <textarea style={{backgroundColor: darkMode && "#333"}} rows="6" placeholder="Mensaje" name="message" />
                <button>Enviar</button>
                {done && " Tu Email se ha enviado Gracias..." }
              </form>
              <a className="a-cv" href="https://github.com/jeanoropeza130/JeanJSDev-Portafolio/raw/master/src/assets/CV-Jean.pdf"download>Descarga Mi CV</a>  
            </div>
          </div>   
    </div>
  )
}

export default Contact