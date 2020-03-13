import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navbarOpen: false,
      css: "collapse navbar-collapse",
      links: [
        {
          id: 1,
          path: "/",
          text: "home",
        },
        {
          id: 2,
          path: "/about",
          text: "about",
        },
      ],
    }
  }

  navbarHandler = () => {
    let newState = this.state.navbarOpen ? { navbarOpen: false, css: "collapse navbar-collapse" } : { navbarOpen: true, css: "collapse navbar-collapse show" }
    this.setState(newState)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
        </Link>
        <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => (
              <li className="nav-item" key={link.id}>
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="nav-item ml-sm-5">
              <FaCartArrowDown className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar
