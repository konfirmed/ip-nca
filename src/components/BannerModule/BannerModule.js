import * as React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
 import Button from "../Button/Button"

const BannerModule = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <BannerModuleStyles>
        {children ? children : ''}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                £{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            <div className="banner__btns">
              {enquire && (
                <Button
                  className="btn"
                  text="Enquire Now"
                  as={Link}
                  to="/contact"
                />
              )}
              <Button onClick={scrollToArea} text="Learn More" />
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
