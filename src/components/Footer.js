import React, { Component } from 'react'
import { FaGithub,FaCode } from 'react-icons/fa';
import '../style/footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div>
         <footer className='footer' id="footer">
                <span className="user" >
                    The <a href="https://www.theodinproject.com/" className="odin">Odin</a> Project 
                    <a href="https://github.com/chromecodes/cv-project" className="fa-code"> <FaCode className= "fa-code" /> </a>
                     chromecodes 
                    <a href="https://github.com/chromecodes" > <FaGithub className="fa-github" /></a>
                </span>
            </footer>
      </div>
    )
  }
}
