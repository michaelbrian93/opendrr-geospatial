const fs = require('fs')
const yaml = require('js-yaml')
// const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const ymlDoc = yaml.safeLoad(fs.readFileSync('./content/data/yaml/downloads.yaml', 'utf-8'))
    ymlDoc.forEach(element => {
        createPage({
            path: element.path,
            component: require.resolve('./src/templates/downloads.js'),
            context: {
                pageContent: element.content,
                multiHazardThreat: element.multiHazardThreat,
                physicalExposureB: element.physicalExposureB,
                physicalExposureS: element.physicalExposureS,
                riskDynamics: element.riskDynamics,
                socialFabric: element.socialFabric,
                // links: element.links,
            },
        })
    })
    const ymlDocER = yaml.safeLoad(fs.readFileSync("./content/data/yaml/economic-regions.yaml", "utf-8"))
    ymlDocER.forEach(element => {
      createPage({
        path: element.path,
        component: require.resolve("./src/templates/economicRegions.js"),
        context: {
          pageContent: element.content,
          aggregateData: element.aggregateData,
          downloadsPage: element.downloadsPage,
          // links: element.links,
        },
      })
    })


    const newsAndUpdatesTemplate = require.resolve(`./src/templates/newsAndUpdates.js`)
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: newsAndUpdatesTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
}



// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     const regex = [
//       /node_modules\/leaflet/,
//       /node_modules\\leaflet/
//     ]
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: regex,
//             use: loaders.null()
//           }
//         ]
//       }
//     })
//   }
// }


// exports.createPages = ({ actions }) => {
//   const { createPage } = actions
//   const ymlDocER = yaml.safeLoad(fs.readFileSync("./content/data/yaml/economic-regions.yaml", "utf-8"))
//   ymlDocER.forEach(element => {
//     createPage({
//       path: element.path,
//       component: require.resolve("./src/templates/economicRegions.js"),
//       context: {
//         pageContent: element.content,
//         aggregateData: element.aggregateData,
//         downloadsPage: element.downloadsPage,
//         // links: element.links,
//       },
//     })
//   })
// }