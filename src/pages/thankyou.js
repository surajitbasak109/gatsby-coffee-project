import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/Globals/Title"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Thankyou" keywords={[`gatsy`, `application`, `react`]} />
    <div className="thankyou">
      <div className="container">
        <div className="row">
          <div className="col-11 mx-auto py-5 text-center thankyou" style={{ height: "78.5vh" }}>
            <Title title="Email sent" />
            <p>Thank you for contacting us, one of our representative will contact you on email.</p>
            <Link className="btn btn-yellow btn-lg" to="/">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulItems {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
