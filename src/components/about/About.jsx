import './about.css'



const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://i.ibb.co/xYpx7D4/p1.jpg" alt="" 
                className="a-img"
                />
            </div>
        </div>
        <div className="a-bg"></div>
        <div className="a-right">
          <div className="a-card-text">
          <h1 className="a-title">Sobre Mi</h1>
            <p className="a-sub">
            Soy un desarrollador con varios años de experiencia en el area del Frontend ademas con conocimientos basicos en la parte de Backend
            Node, Express, MongoDB, MySQL.
            </p>
            <p className="a-desc">
            De profesion T.S.U. en Informatica desde 2012. Apasionado por la tècnologia y la programacion. Como Frontend Developer mi trabajo consiste en crear interfaces profesionales e intuitivas para brindar la mejor experiencia al usuario final. Utilizando tecnologias como HTML5, CSS, JavaScript y React.js
            </p>
            <br />
            <b>"Cada dia hay algo nuevo que aprender".</b>
          </div>
          
          <a className="a-cv" href="https://github.com/jeanoropeza130/JeanJSDev-Portafolio/raw/master/src/assets/CV-Jean.pdf"download>Descarga Mi CV</a> 
          
            
            
        </div>
    </div>
  )
}

export default About