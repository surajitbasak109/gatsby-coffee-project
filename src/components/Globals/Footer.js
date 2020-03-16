import React from "react"

const Footer = props => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h4>
              all rights reserved &copy; {new Date().getFullYear().toString()}
            </h4>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
