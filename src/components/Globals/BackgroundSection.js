import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage fluid={img}>
      <div className={styleClass}>
        <h1 className="title text-center text-white text-uppercase display-4 font-weight-bold">{title}</h1>
        {children}
      </div>
    </BackgroundImage>
  )
}
export default BackgroundSection

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
