import './knowledge.css'
import html from "../../img/html.png"
import css from "../../img/css.png"
import js from "../../img/js.png"
import react from "../../img/react.png"
import node from "../../img/node.png"
import npm from "../../img/npm.png"
import mysql from "../../img/mysql.png"
import mongo from "../../img/mongo.png"
import postman from "../../img/postman.png"
import firebase from "../../img/firebase.png"
import git from "../../img/git.png"
import github from "../../img/github.png"




const About = () => {
  return (
    <div className="k">
    
        <h1 className="k-title">Conocimientos</h1>
        <div className="k-icon">

        <img src={html} title='HTML' alt='HTML'/>
        <img src={css} title='CSS' alt='CSS'/>
        <img src={js} title='JavaScript' alt='JavaScript'/>
        <img src={react} title='REACT' alt='REACT'/>
        <img src={node} title='NODE' alt='NODE'/>
        <img src={npm} title='NPM' alt='NPM'/>
        <img src={mysql} title='MYSQL' alt='MYSQL'/>
        <img src={mongo} title='MONGO DB' alt='MONGO DB'/>
        <img src={postman} title='POSTMAN' alt='POSTMAN'/>
        <img src={firebase} title='FIREBASE' alt='FIREBASE'/>
        <img src={git} title='CSS' alt='CSS'/>
        <img src={github} title='CSS' alt='CSS'/>
       
        
        </div>
    </div>
  )
}

export default About