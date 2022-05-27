import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbarmenu = class extends React.Component {
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
  }
  */
render() {
return (
    <nav className="navbar is-transparent is-link has-shadow" 
    role="navigation" aria-label="main-navigation">
			<div className="container">
        
        {/* Hamburger menu */}
            <div
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
           </div>
          
           
				

        <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveclassName}`}
          >
					<div className="navbar-start has-text-centered">
						<Link className="navbar-item is-active" to="/about">Quienes somos</Link>
						<Link className="navbar-item" to="#">Oferta Educativa</Link>
						<Link className="navbar-item" to="#">Convocatoria</Link>
            <Link className="navbar-item" to="#">Inscripciones</Link>
            <Link className="navbar-item" to="/contact">Contacto</Link>

					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<h1>88888</h1>
						</div>
					</div>
				</div>
        
			</div>
		</nav>
    );
    }
};

export default Navbarmenu;