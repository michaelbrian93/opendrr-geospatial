import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import HomePageBanner from "../components/homePageBanner"
import HomeCardGrid from "../components/homeCardGrid"


const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <HomePageBanner/>
      <div className="banner col-md-12">
    <HomeCardGrid/>
    </div>
  </div>
)

export default IndexPage
