import React from "react"
import Title from "../Globals/Title"

const Contact = props => {
  const domain = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/surajitbasak109@gmail.com" method="POST">
            <input type="hidden" name="_next" value={`${domain}/thankyou`} />
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" id="name" placeholder="john smith" />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" id="email" placeholder="email@email.com" />
            </div>
            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" className="form-control" rows="5" placeholder="Your description goes here..."></textarea>
              {/* submit */}
              <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
