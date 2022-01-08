import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "GOUDA TALKS"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div style={{textAlign: 'center'}}>
          <img style={{ margin: 0 }} src="./jess.jpg" alt="Gatsby Scene" />
          <h1 style={{fontFamily: 'Josefin Sans'}}>
            Hey everyone! What's up, 你好!{" "}
          </h1>
          <p style={{fontFamily: 'Cormorant'}}>Welcome to your new Gatsby website. You are on your home page.</p>
        </div>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
