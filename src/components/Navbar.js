import React from "react";
import { Link } from "gatsby";
import UJED from "../img/logo-ujed-tred.png";
//import logo from "../img/logo.svg";
import logo from "../img/FADER.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

 /*toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  */

  render() {
    return (
      <nav
        className="navbar is-transparent is-primary">
		  	{/*<div className="container">*/}   
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="DEPI" width= "auto" height="100" />
             {/*style={{ width: "66px" }}*/}
             División de Estudios de Posgrado e Investigación
            </Link>
            
            {/* Hamburger menu */}
            {/*<div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
           </div>*/}
          </div>
          <div className="navbar-menu">
            <div className="navbar-start has-text-centered">
              
              {/*<Link className="navbar-item" to="/about">
                Quienes somos   
              </Link>
              <Link className="navbar-item" to="/products">
                Oferta 
              </Link>
              <Link className="navbar-item" to="/blog">
                Convocatoria y Eventos
              </Link>
              <Link className="navbar-item" to="/contact">
                Contacto
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.ujed.mx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img src={UJED} alt="UJED" width= "150" height="auto"/>
                </span>
              </a>
            </div>
          </div>
        	{/*</div>*/}
      </nav>
      
    );
    
  }
};

export default Navbar;
