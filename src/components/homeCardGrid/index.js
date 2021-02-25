import React from 'react'
import { Link } from "gatsby"
// import { CIcon } from '@coreui/icons-react'
const HomeCardGrid = () => {

    return (
        <div className="Grid">
            <div className="economic-region-insights">
                <div className="path">
                  <div className="section-title"><Link to="/information-visualization">OpennDRR Economic Region Insights</Link></div>
                </div>
            </div>

            <div className="download-economic-region-insights">
                <div className="path">
                   <div className="section-title"><Link to="/downloads">Download Economic Region Data</Link></div> 
                </div>
            </div>

            <div className="contact-opendrr">
                <div className="path">
                  <div className="section-title"><Link to="/">Have a Question or Concern?</Link></div>
                </div>
            </div>




            <div className="news-updates">
            <p className="blog-title">Latest News & Updates</p>
            <hr/>
                {/* <div className="path">
                    <Link to="/">Have a Question or Concern?</Link>
                </div> */}
            </div>
        </div>
    )
}

export default HomeCardGrid