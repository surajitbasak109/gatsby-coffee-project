import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = props => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">Adipisicing sapiente doloremque blanditiis odit maiores? Quas sint alias quos corporis dolores. Vel maiores tenetur porro dignissimos itaque Voluptatum tenetur rerum consequatur aspernatur necessitatibus, quos Optio laudantium debitis fugit dolores nam Aspernatur fuga saepe perferendis assumenda dolores quaerat? Illum eius fugiat molestias numquam laboriosam quasi Numquam dolorem qui temporibus sequi</p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Info
