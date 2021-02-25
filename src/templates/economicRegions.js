import React from "react"
import { Link } from "gatsby"

const EconomicRegions = props => {
  const { pageContext } = props
  const { pageContent, aggregateData, downloadsPage } = pageContext
  // const { center } = this.props

  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>
          {" "}
          / Economic Regions / Region{" "}
        </span>
      </div>
      <div>
        {pageContent.map((data, index) => {
          return <h1 key={`content_title_${index}`}>{data.title}</h1>
        })}
        <hr
          style={{
            height: "2px",
            borderWidth: 0,
            color: "red",
            backgroundColor: "red",
          }}
        />
      </div>
      {/* <Map>
        <TileLayer
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map> */}
      <div style={{ display: "flex" }}>
        <p style={{ width: "50%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul style={{ marginLeft: "29%" }}>
          {aggregateData.map((item, index) => {
            return (
              <li className="Region-Summary" key={`aggregateData_${index}`}>
                {item.item}
              </li>
            )
          })}
        </ul>
      </div>
      <Link
        to="/indicators/"
        state={{
          modal: true,
        }}
      >
        Indicators
      </Link>
      {/* <Link
        to="/indicatorModal/"
        state={{
          modal: true,
        }}
      >
        Indicators
      </Link> */}
      {/* <div className="MAP">MAP COMPONENT</div> */}
      <div className="container">
        <tr>
          <th>
            <h2>{pageContent.title}</h2>
          </th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
        <tr>
          <td>Multi Hazard Threat (Census Subdivision)</td>
          <td>Mon, Jan 25, 21</td>
          <td>
            <span className="label label-default">.gpkg </span>
            <button className="btn btn-primary btn-sm map-link pull-right">
              View On Map
            </button>
          </td>
        </tr>
        <tr>
          <td>Physical Exposure (Buildings)</td>
          <td>Mon, Jan 25, 21</td>
          <td>
            <span className="label label-default">.gpkg </span>
            <button className="btn btn-primary btn-sm map-link pull-right">
              View On Map
            </button>
          </td>
        </tr>
        <tr>
          <td>Risk Dynamics</td>
          <td>Mon, Jan 25, 21</td>
          <td>
            <span className="label label-default">.gpkg </span>
            <button className="btn btn-primary btn-sm map-link pull-right">
              View On Map
            </button>
          </td>
        </tr>
        <tr>
          <td>Social Fabric (Census Subdivision) </td>
          <td>Mon, Jan 25, 21</td>
          <td>
            <span className="label label-default">.gpkg </span>
            <button className="btn btn-primary btn-sm map-link pull-right">
              View On Map
            </button>
          </td>
        </tr>
      </div>
      <div className="container">
        <h2>Interested in downloading the Datasets?</h2>
        {downloadsPage.map((data, index) => {
          return (
            <p key={index}>
              Go to the{" "}
              <Link key={`downloadsPage_link_${index}`} to={data.link}>
                Downloads Page
              </Link>
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default EconomicRegions
